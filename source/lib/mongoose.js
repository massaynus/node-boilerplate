import mongoose from 'mongoose'
import { DB_CONNECTION_STRING } from './config'

export async function connect() {
    await mongoose.connect(DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });

}