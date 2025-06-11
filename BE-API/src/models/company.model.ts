import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    thumbnail: { type: String, required: true },
    coverage: { type: String, required: true },
    descriptionHTML: { type: String, required: true },
    descriptionMarkdown: { type: String, required: true },
    website: {
        type: String,
        required: true,
        match: [/^https?:\/\/[^\s$.?#].[^\s]*$/, 'URL không hợp lệ']
    },
    address: { type: String, required: true },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        match: [/^\d{10,11}$/, 'Số điện thoại không hợp lệ']
    },
    amountEmployer: {
        type: Number,
        required: [0, true, 'Số lượng nhân viên không thể âm']
    },
    taxNumber: {
        type: String,
        required: true,
        unique: true,
        match: [/^\d{10}(\d{3})?$/, 'Mã số thuế không hợp lệ']
    },
    statusCode: {
        type: String,
        required: true,
        enum: ['active', 'inactive']
    },
    censorCode: {
        type: String,
        required: true,
        enum: ['pending', 'censored', 'uncensored']
    },
    userId: { type: String, required: true, unique: true },
    fileUrl: { type: String, required: true },
    allowPost: { type: Boolean, required: true, default: false },
    allowHotPost: { type: Boolean, required: true, default: false }
}, { timestamps: true });

// companiesSchema.index({ taxNumber: 1, phoneNumber: 1 });
const Company = mongoose.model('Company', companySchema);
export default Company