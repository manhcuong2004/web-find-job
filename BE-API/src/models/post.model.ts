import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    timePost: { type: Date, required: true },
    timeEnd: { type: Date, required: true },
    detailPostId: { type: Number, required: true },
    postId: { type: Number, required: true },
    isHot: { type: Boolean, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
});

const Post = mongoose.model('Post', postSchema);
export default Post