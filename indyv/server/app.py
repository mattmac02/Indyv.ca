# from flask import Flask, request, jsonify, send_file
# from flask_cors import CORS
# import openai
# import PyPDF2
# import subprocess  

# app = Flask(__name__)
# # CORS(app)
# CORS(app, resources={r"/upload": {"origins": "http://192.168.68.112:3000"}})


# def extract_text_from_pdf(pdf_file):
#     pdf_reader = PyPDF2.PdfReader(pdf_file)
#     if pdf_reader.is_encrypted:
#         pdf_reader.decrypt('')
#     text = ""
#     for page in pdf_reader.pages:
#         text += page.extract_text()
#     return text


# def extract_sections(text):
#     lines = text.split('\n')
#     sections = {}
#     current_section = None
#     for line in lines:
#         line = line.strip()
#         # Simple heuristic: If line is uppercase and shorter than 40 characters
#         if line.isupper() and len(line) < 40:
#             current_section = line
#             sections[current_section] = ""
#         elif current_section:  # if we're within a section, append the line to it
#             sections[current_section] += line + ' '
#     return sections

# def generate_portfolio(sections):
#         # HTML template with Bootstrap and custom styling
#     html_template = """
#     <!DOCTYPE html>
#     <html>
#     <head>
#         <title>Personal Portfolio</title>
#         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
#         <style>
#             body {
#                 font-family: Arial, sans-serif;
#                 padding: 20px;
#             }
#             header {
#                 background-color: #F8F9FA;
#                 padding: 20px;
#                 text-align: center;
#                 margin-bottom: 30px;
#                 border-radius: 8px;
#             }
#             section {
#                 margin-bottom: 20px;
#             }
#             h1 {
#                 color: #343A40;
#             }
#             h2 {
#                 color: #007BFF;
#                 border-bottom: 1px solid #DEE2E6;
#                 padding-bottom: 10px;
#                 margin-bottom: 10px;
#             }
#         </style>
#     </head>
#     <body>
#         <header>
#             <h1>{NAME}</h1>
#         </header>
#         <div class="container">
#             {SECTIONS}
#         </div>
#     </body>
#     </html>
#     """
#     name = sections.get('NAME', 'John Doe')
#     sections_html = ""
#     for title, data in sections.items():
#         sections_html += f"""
#         <section>
#             <h2>{title}</h2>
#             <p>{data}</p>
#         </section>
#         """
#     full_html = html_template.replace('{NAME}', name).replace('{SECTIONS}', sections_html)
#     with open('portfolio.html', 'w') as f:
#         f.write(full_html)
#     print("Styled portfolio website generated as 'portfolio.html'")



# @app.route('/upload', methods=['POST'])
# def upload():
#     openai.api_key = "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"

#     try:
#         pdf_file = request.files['file']
        
#         if not pdf_file:
#             return jsonify({'error': 'No file selected'}), 400

#         text = extract_text_from_pdf(pdf_file)
#         print(len(text))
#            # Use OpenAI API to generate text content
#         response = openai.ChatCompletion.create(
#             engine="gpt-3.5-turbo",
#             prompt=text,
#             max_tokens=50,  # Adjust as needed
#             temperature=0.7,
#             top_p=1.0
#         )
#         # print(response)
#         print("ok we made it")
#         generated_text = response.choices[0].text.strip()
#         print(len(generated_text))
#         sections = extract_sections(text)

#         generate_portfolio(sections, generated_text)

#         filename = "portfolio.html"
#         subprocess.Popen(['open', filename], stdout=subprocess.PIPE, stderr=subprocess.PIPE)


#         return send_file(filename, as_attachment=True)
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
from PyPDF2 import PdfReader
from flask_cors import CORS
import openai  # Import the OpenAI library

app = Flask(__name__)
CORS(app)

# Configure OpenAI API key
openai.api_key = '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'

# Define the upload folder and allowed extensions
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'pdf'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Check if the file has a valid file extension
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'message': 'No file part'})

    file = request.files['file']

    if file.filename == '':
        return jsonify({'message': 'No selected file'})

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        pdf_file = open(os.path.join(app.config['UPLOAD_FOLDER'], filename), 'rb')
        pdf_reader = PdfReader(pdf_file)

        text = ""
        for page in range(len(pdf_reader.pages)):
            text += pdf_reader.pages[page].extract_text()

        pdf_file.close()

        # Step 1: Generate section headers using GPT-3
        section_headers_response = openai.Completion.create(
            model="gpt-3.5-turbo-instruct",
            prompt="In this resume, only give me the main section headers: "+text,
            max_tokens=50  # Adjust as needed
        )

        section_headers = section_headers_response.choices[0].text.split('\n')

        # Step 2: Extract experiences for each section header using GPT-3
        sections = {}
        for header in section_headers:
            header_prompt = f"Using the section header '{header}', extract each experience from this text:"+text
            experiences_response = openai.Completion.create(
                engine="gpt-3.5-turbo-instruct",
                prompt=header_prompt,
                max_tokens=1000  # Adjust as needed
            )

            experiences = experiences_response.choices[0].text
            sections[header] = experiences
        print(len(section_headers))
        for head in section_headers:
            print(f"section {head}:\n {sections[head]}\n DONE")
        response_data = {
            'message': 'File uploaded and text extracted successfully',
            'sections': sections
        }

        return jsonify(response_data)
    else:
        return jsonify({'message': 'Invalid file extension'})

if __name__ == '__main__':
    app.run(debug=True)