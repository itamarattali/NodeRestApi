const express = require('express');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
require('./database/connection');

const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const bodyParser = require('body-parser');


app.use(express.json());
app.use(bodyParser.urlencoded({extended: true, limit: '1mb'}));
app.use(bodyParser.json());
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
