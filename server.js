const { json } = require('body-parser');
const express = require('express');
const fs = require('fs');
const path = require('path');
const notes = require('./Develop/db/db.json')
const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get('/api/notes', (req, res) => {
res.sendFile(path.join(__dirname, './Develop/db/db.json'));
})

app.post('/api/upvotes/:review_id', (req, res) => {
const notesTaker = JSON.parse(fs.readFileSync('./Develop/db/db.json'))
const newNotes = req.body;
notesTaker.push(newNotes)
fs.writeFileSync('./Develop/db/db.json', json.stringify(notesTaker))
res.json(notesTaker);

})


