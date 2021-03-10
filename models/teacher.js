import mongoose from 'mongoose';
const { Schema } = mongoose;

const teacherSchema = new Schema({
    avail: {start: Date, end: Date},
    room: String,
    name: {first: String, last: String},
});

export default mongoose.model('Teacher', teacherSchema);