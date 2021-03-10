import mongoose from 'mongoose';
const { Schema } = mongoose;

const courseSchema = new Schema({
    times: [{day: Number, period: Number}],
    students: [Schema.Types.ObjectId],
    teacher: Schema.Types.ObjectId,
});

const Course = mongoose.model('Course', courseSchema);