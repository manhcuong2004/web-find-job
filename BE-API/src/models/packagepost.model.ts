import mongoose from 'mongoose';

const packagePostSchema = new mongoose.Schema({

    name: { type: String, required: true },
    value: { type: Number, required: true },
    price: { type: Number, required: true },
    isHot: { type: Boolean, required: true },
    isActive: { type: Boolean, required: true }
});

const PackagePost = mongoose.model('PackagePost', packagePostSchema);
export default PackagePost