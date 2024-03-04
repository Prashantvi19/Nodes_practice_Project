const express = require('express');
const path = require('path');
const app = express();

const FolderPath = path.join(__dirname, 'public');
// access html pages by folder
app.use(express.static(FolderPath));
app.listen(800);
