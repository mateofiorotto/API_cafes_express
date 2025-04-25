import mongoose from "mongoose";

//Schema de Cafe: name, description, roastLevel, flavorNote, image, origin (relacionado con el modelo Origin)
const coffeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    roastLevel: {
        type: String,
        required: true
    },
    flavorNote: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    origin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Origin",
        required: true
    }
});

export default mongoose.model("Coffee", coffeeSchema);