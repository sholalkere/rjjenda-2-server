import mongoose from 'mongoose';
const { Schema } = mongoose;

const courseSchema = new Schema({
    times: [{day: Number, period: Number}],
    students: [Schema.Types.ObjectId],
    teacher: Schema.Types.ObjectId,
});

export default mongoose.model('Course', courseSchema);