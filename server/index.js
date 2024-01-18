/*
 * Author : Tawsif Mahmud
 * Title : Initial File
 * Description: Backend server starts from here
 * Date : 16-01-2024
 */

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connection = require('./db');
const songRouter = require('./routes/songs');

// App initialized
const app = express();

// database connected
connection();

app.use(express.json());
app.use(cors());

app.use('/api/songs', songRouter);

// port
const port = process.env.PORT || 8080;

app.listen(port, console.log('Listening on port', port));
