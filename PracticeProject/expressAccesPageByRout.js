const express = require('express');
const path = require('path');
const app = express();

const FolderPath = path.join(__dirname, 'public');

app.get('/', (req, res) => {
    res.sendFile(`${FolderPath}/index.html`);
});

app.get('/hello', (req, res) => {
    res.sendFile(`${FolderPath}/hello.html`);});
app.get('*', (req, res) => {
    res.sendFile(`${FolderPath}/404.html`);});

app.listen(500);