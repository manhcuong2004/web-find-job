import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    lastName: { type: String, required: true },
    firstName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    genderCode: { type: String, required: true },
    image: { type: String, required: true },
    job: { type: String, required: true },
    companyId: { type: Number, required: true }
});

const User = mongoose.model('User', userSchema);
export default User