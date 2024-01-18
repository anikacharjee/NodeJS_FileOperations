# NodeJS_FileOperations
Using NodeJS, performing all file operations.

# Make sure, you are installing the necessary dependencies:- `npm install express body-parser`

Here are the steps to execute the code using Postman:

# Step 1: Run the Server

Make sure your Node.js server is running. If not, go to the project folder in the terminal and run:

`node filename.js`

The server should start, and you should see a message indicating that it's running on http://localhost:3000.

# Step 2: Test Endpoints with Postman

1. Create a file and add text:
   - Open Postman and create a new request.
   - Set the request type to *POST*.
   - Enter the URL: `http://localhost:3000/createFile`.
   - Go to the "Body" tab, select `raw`, and enter the JSON payload:

     `{
       "text": "Hello, this is the initial text."
     }`

   - Click on "Send" to execute the request.

2. Modify text in the file:
   - Create a new request in Postman.
   - Set the request type to *PUT*.
   - Enter the URL: `http://localhost:3000/modifyFile`.
   - Go to the "Body" tab, select `raw`, and enter the JSON payload:

     `
     {
       "text": "This is additional text."
     }
     `

   - Click on "Send" to execute the request.

3. Delete text from the file:
   - Create a new request in Postman.
   - Set the request type to *DELETE*.
   - Enter the URL: `http://localhost:3000/deleteText`.
   - Click on "Send" to execute the request.

# Step 3: Verify Results

You should see the responses in the Postman interface. Additionally, you can check the console where your Node.js server is running to see any server-side logs.

For verification, you can also check the contents of the file `filename.txt` in your project folder to ensure that the file operations were successful.
