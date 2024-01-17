// app.js
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Route to create a file and add text to it
app.post('/createFile', (req, res) => {
    const fileName = 'example1.txt';
    const text = req.body.text;

    fs.writeFile(fileName, text, (err) => {
        if (err) {
            console.error('Error creating file:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json({ message: 'File created successfully' });
        }
    });
});

// Route to modify text in the file
app.put('/modifyFile', (req, res) => {
    const fileName = 'example1.txt';
    const newText = req.body.text;

    fs.appendFile(fileName, `\n${newText}`, (err) => {
        if (err) {
            console.error('Error modifying file:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json({ message: 'Text added to the file' });
        }
    });
});

// Route to delete text from the file
app.delete('/deleteText', (req, res) => {
    const fileName = 'example1.txt';

    fs.truncate(fileName, 0, (err) => {
        if (err) {
            console.error('Error deleting text from file:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json({ message: 'Text deleted from the file' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
