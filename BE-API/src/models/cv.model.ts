import mongoose from 'mongoose';

const cvSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    postId: { type: Number, required: true },
    file: { type: Buffer, required: true },
    isChecked: { type: Boolean, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
});
const CV = mongoose.model('CV', cvSchema);
export default CV