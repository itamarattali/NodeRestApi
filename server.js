const express = require('express');
const mongoose = require('./database/connection');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/posts', postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
