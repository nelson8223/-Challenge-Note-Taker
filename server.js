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


