
import mongoose from 'mongoose';

const Person = mongoose.model('Person', new mongoose.Schema({
    FirstName: String,
    LasName: String,
    DateOfBirth: Date
}));

export default Person;