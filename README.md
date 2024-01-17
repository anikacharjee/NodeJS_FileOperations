# NodeJS_FileOperations
Using NodeJS, performing all file operations.

Here are the steps to execute the code using Postman:

# Step 1: Run the Server

Make sure your Node.js server is running. If not, go to the project folder in the terminal and run:

*node filename.js*


The server should start, and you should see a message indicating that it's running on http://localhost:3000.

# Step 2: Test Endpoints with Postman

1. Create a file and add text:
   - Open Postman and create a new request.
   - Set the request type to *POST*.
   - Enter the URL: `http://localhost:3000/createFile`.
   - Go to the "Body" tab, select `raw`, and enter the JSON payload:

     *{
       "text": "Hello, this is the initial text."
     }*

   - Click on "Send" to execute the request.
