import mongoose from "mongoose";

//Schema de user: name, created, email, password (sera hasheada en el CONTROLADOR al momento de crearse)
const userSchema = new mongoose.Schema({
    name: String,
    created: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user',
        required: true
    }
});

export default mongoose.model('User', userSchema);