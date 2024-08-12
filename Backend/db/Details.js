const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    assingedTo: String,
    progressstatus: String,
    dueDate: Date,
    priority: String,
    comments: String
});

const details = mongoose.model('tables',userSchema);
module.exports = details; 
