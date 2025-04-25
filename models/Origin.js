import mongoose from "mongoose";

//Schema de Origen: country, region, climate, description
const originSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    climate: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export default mongoose.model("Origin", originSchema);
