from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline

# MongoDB connection setup
client = MongoClient('mongodb://localhost:27017/')
db = client['student']  # Access the 'student' database
collection = db['students']  # Access the 'students' collection

# Load the GPT-2 model and tokenizer
try:
    tokenizer = AutoTokenizer.from_pretrained("gpt2")
    model = AutoModelForCausalLM.from_pretrained("gpt2")
    generator = pipeline('text-generation', model=model, tokenizer=tokenizer)
    print("GPT-2 model loaded successfully.")
except Exception as e:
    print("Error loading the GPT-2 model:", e)
    generator = None

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Create a prompt for the GPT-2 model based on the student data
def create_prompt(student_data):
    subjects_info = "\n".join([f"{sub['subject']}: {sub['marks']} marks, {sub['attendance']}% attendance" for sub in student_data['subjects']])
    
    prompt = (
        f"Student Code: {student_data['Student Code']}\n"
        f"Student Name: {student_data['Student Name']}\n"
        f"Elective: {student_data['Elective Name']}\n"
        f"Overall Attendance: {student_data['attendance']}%\n"
        f"Subjects:\n{subjects_info}\n\n"
        f"Please provide 3 specific and actionable study tips for improving performance in low-mark subjects and maintaining high attendance."
    )
    return prompt

# Function to generate tips with retry logic and prompt cleaning
def generate_tips_for_student(generator, student_data, retries=3):
    prompt = create_prompt(student_data)

    for attempt in range(retries):
        try:
            # Generate output from GPT-2 with a larger token limit to prevent cut-off text
            output = generator(prompt, max_new_tokens=200, num_return_sequences=1)
            generated_text = output[0]['generated_text'].strip()

            # Clean up the text to remove the prompt from the output
            cleaned_text = generated_text.replace(prompt, "").strip()

            # Ensure the generated text is long enough to be useful
            if len(cleaned_text) > 50:  # 50 is a threshold to ensure it's not too short
                return cleaned_text
        
        except Exception as e:
            print(f"Error during generation attempt {attempt + 1}: {e}")

        print(f"Generation failed, retrying... ({attempt + 1}/{retries})")
    
    return "Unable to generate study tips at this time. Please try again later."

# API endpoint to get student data and generate tips using GPT-2
@app.route('/student/<student_code>', methods=['GET'])
def get_student(student_code):
    try:
        # Fetch student data from MongoDB
        student_data = collection.find_one({'Student Code': student_code}, {'_id': 0})
        
        if not student_data:
            return jsonify({"error": "Student not found"}), 404

        # Generate study tips using GPT-2 model
        student_data['tips'] = generate_tips_for_student(generator, student_data)

        # Return the student data with generated tips
        return jsonify({"student_data": student_data}), 200
    except Exception as e:
        print(f"Error fetching or processing data for student {student_code}: {e}")
        return jsonify({"error": "Error fetching or processing student data"}), 500

if __name__ == '__main__':
    app.run(debug=True)
    