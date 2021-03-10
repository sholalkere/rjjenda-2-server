import mongoose from 'mongoose';
const { Schema } = mongoose;

const studentSchema = new Schema({
    birthday: Date,
    name: {first: String, last: String},
    divorced: Boolean,
    siblings: [Schema.Types.ObjectId],
    advisor: Schema.Types.ObjectId,
    courses: [Schema.Types.ObjectId],
    parent1avail: {start: Date, end: Date},
    parent1pref: [{teacher: Schema.Types.ObjectId, pref: Number}],
    parent2avail: {start: Date, end: Date},
    parent2pref: [{teacher: Schema.Types.ObjectId, pref: Number}],
});

export default mongoose.model('Student', studentSchema);