const mongoose = require('mongoose');

//schema
const testSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}); 

const Test = mongoose.model('Test',testSchema);

module.exports = Test;