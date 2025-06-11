import mongoose from 'mongoose';

const userSkillSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    skillId: { type: Number, required: true }
});


const UserSkill = mongoose.model('UserSkill', userSkillSchema);
export default UserSkill