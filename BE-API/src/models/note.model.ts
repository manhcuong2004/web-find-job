import mongoose from 'mongoose';

const notesSchema = new mongoose.Schema({
    postId: { type: Number, required: true },
    userId: { type: Number, required: true },
    note: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },


});
const Note = mongoose.model('Note', notesSchema);
export default Note;