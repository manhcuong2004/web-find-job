import mongoose from 'mongoose';

const detailPostSchema = new mongoose.Schema({
    name: { type: String, required: true },
    descriptionHTML: { type: String, required: true },
    descriptionMarkdown: { type: String, required: true },
    categoryJobCode: { type: String, required: true },
    categoryJobLevelCode: { type: String, required: true },
    typeCode: { type: String, required: true },
    experienceJobCode: { type: String, required: true },
    genderPostCode: { type: String, required: true },
    addressCode: { type: String, required: true },
    salaryJobCode: { type: String, required: true },
    amount: { type: Number, required: true }
});
const DetailPost = mongoose.model('DetailPost', detailPostSchema);
export default DetailPost