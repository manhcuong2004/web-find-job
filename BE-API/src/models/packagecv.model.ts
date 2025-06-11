import mongoose from 'mongoose';

const packageCVSchema = new mongoose.Schema({

    name: { type: String, required: true },
    value: { type: Number, required: true },
    price: { type: Number, required: true },
    isActive: { type: Boolean, required: true }
});

const PackageCV = mongoose.model('PackageCV', packageCVSchema);
export default PackageCV