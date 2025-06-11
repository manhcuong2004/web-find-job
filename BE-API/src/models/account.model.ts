import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
    phonenumber: {
        type: String,
        required: true,
        unique: true,
        match: [/^\d{10,11}$/, 'Số điện thoại không hợp lệ']
    },
    password: {
        type: String,
        required: true
    },
    roleCode: {
        type: String,
        required: true,
        enum: ['admin', 'employer', 'candidate', 'company']
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive']
    },
    userId: { type: String, required: true, unique: true }
}, { timestamps: true });


const Account = mongoose.model('Account', accountSchema);
export default Account