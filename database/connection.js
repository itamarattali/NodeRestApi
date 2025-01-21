const mongoose = require('mongoose');
const dbPath = process.env.DB_PATH;

mongoose.connect(dbPath, {
    useNewUrlParser: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

module.exports = mongoose;
