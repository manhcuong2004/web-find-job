import mongoose from 'mongoose';

const userSkillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    categoryJobCode: { type: String, required: true },
});


const UserSkill = mongoose.model('UserSkill', userSkillSchema);
export default UserSkill