import Coffee from "../models/Coffee.js";

//Definir metodos http

// GET
export const getCoffees = async (req, res) => {
    try {
        //populate me permite traer informacion de otro modelo
        const coffees = await Coffee.find().populate("origin");
        res.status(200).json({ message: "OK", data: coffees });
    } catch (error) {
        console.error("Error al obtener cafés:", error);
        res.status(500).json({ message: "Error al obtener cafes", error });
    }
}

// GET pero con id
export const getCoffeeById = async (req, res) => {
    //obtengo el id
    const { id } = req.params;
    try {
        const coffee = await Coffee.findById(id).populate("origin");

        //si no encuentra el id 404
        if (!coffee) {
            res.status(404).json({ message: "Cafe no encontrado" });
        } else {
            res.status(200).json({ message: "OK", data: coffee });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener cafe", error });
    }
}

// POST
export const createCoffee = async (req, res) => {
    const { name, description, roastLevel, flavorNote, image, origin } = req.body;

    if (!name || !description || !roastLevel || !flavorNote || !image || !origin) {
        res.status(400).json({ message: "Faltan datos OBLIGATORIOS", data: { name, description, roastLevel, flavorNote, image, origin } });
    }

    try {
        const newCoffee = new Coffee({ name, description, roastLevel, flavorNote, image, origin });
        await newCoffee.save();
        res.status(201).json({ message: "Cafe creado", data: newCoffee });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear cafe", error });
    }
}

// PUT (update)
export const updateCoffee = async (req, res) => {
    const { id } = req.params;
    const { name, description, roastLevel, flavorNote, image, origin } = req.body;

    try {
        const updatedCoffee = await Coffee.findByIdAndUpdate(id, { name, description, roastLevel, flavorNote, image, origin }, { new: true });
        
        if (!updatedCoffee) {
            res.status(404).json({ message: "Cafe no encontrado" });
        } else {
            res.status(200).json({ message: "Cafe actualizado", data: updatedCoffee });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar cafe", error });
    }
}

// DELETE
export const deleteCoffee = async (req, res) => {
    const { id } = req.params;

    try {
    const coffee = await Coffee.findByIdAndDelete(id);

    if (!coffee) {
        res.status(404).json({ message: "Cafe no encontrado" });    
    } else {
        res.status(200).json({ message: "Cafe eliminado", data: coffee });
    }


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar cafe", error });
    }
}