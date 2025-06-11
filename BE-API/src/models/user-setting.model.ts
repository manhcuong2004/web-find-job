import mongoose from 'mongoose';

const userSettingSchema = new mongoose.Schema({
    categoryJobCode: { type: String, required: true },
    salaryJobCode: { type: String, required: true },
    addressCode: { type: String, required: true },
    experienceJobCode: { type: String, required: true },
    isFindJob: { type: Boolean, required: true },
    isTakeMail: { type: String, required: true },
    File: { type: Buffer },
    userId: { type: Number, required: true }
});

const UserSetting = mongoose.model('UserSetting', userSettingSchema);
export default UserSetting