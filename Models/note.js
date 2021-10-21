const mongoose = require('mongoose');
const notesschema = new mongoose.Schema({
    content: String,
},{
    timestamps: true,
});
const Note = mongoose.model('Note',notesschema);
module.exports = Note;
