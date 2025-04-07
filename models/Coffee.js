import mongoose from "mongoose";

const coffeeSchema = new mongoose.Schema({
    name: String,
    description: String,
    roastLevel: String,
    flavorNote: String,
    image: String,
    // origin viene del modelo Origin. Cada cafe tiene un origen y un origen puede tener muchos cafes
    origin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Origin"
    }
});

export default mongoose.model("Coffee", coffeeSchema);