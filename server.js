const { json } = require('body-parser');
const express = require('express');
const fs = require('fs');
const path = require('path');
const notes = require('./db/db.json')
const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))


app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
);


app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
app.get('/api/notes', (req, res) => {
res.sendFile(path.join(__dirname, './db/db.json'));
})

app.post('/api/notes', (req, res) => {
const notesTaker = JSON.parse(fs.readFileSync('./db/db.json'))
console.log(notesTaker)
const newNotes = req.body;
newNotes.id = newNotes.length + 1
notesTaker.push(newNotes)
fs.writeFileSync('./db/db.json', JSON.stringify(notesTaker))
res.json(notesTaker);

})

// app.delete('/api/notes/:review_id', (req, res) => {
// const notesTaker = JSON.parse(fs.readFileSync('./db/db.json'))
// const remove = note.filter(remove)
// fs.writeFileSync('./db/db.json', json.stringify(remove))
// res.json(remove);


// })

app.listen(PORT, () =>
  console.log(`App listening on Port: 3001 🚀, http://localhost:${PORT}`)
);


