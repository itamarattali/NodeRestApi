const express = require('express');
const mongoose = require('./database/connection');
const postRoutes = require('./routes/postRoutes');

const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
app.use('/posts', postRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
