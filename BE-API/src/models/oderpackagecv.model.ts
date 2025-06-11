import mongoose from 'mongoose';

const orderPackageCVSchema = new mongoose.Schema({

    packagePostId: { type: Number, required: true },
    userId: { type: Number, required: true },
    currentPrice: { type: Number, required: true },
    amount: { type: Number, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
});
const OrderPackageCV = mongoose.model('OrderPackageCV', orderPackageCVSchema);
export default OrderPackageCV