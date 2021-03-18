import {Schema, model, } from 'mongoose';

const Posts = new Schema({
    title: {
        type: String, 
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    }
})

export default model('Posts', Schema);