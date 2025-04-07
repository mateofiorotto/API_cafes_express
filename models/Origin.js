import mongoose from "mongoose";

const originSchema = new mongoose.Schema({
    country: String,
    region: String,
    climate: String,
    description: String
});

export default mongoose.model("Origin", originSchema);