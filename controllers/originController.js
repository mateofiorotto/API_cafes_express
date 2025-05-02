import Origin from "../models/Origin.js";

//Definir metodos http

// GET
export const getOrigins = async (req, res) => {
    try {
        const origins = await Origin.find();

        if (origins.length === 0) {
            return res.status(200).json({ message: "Lista de origenes vacia" });
        }

        res.status(200).json({ message: "OK", data: origins });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener origenes", error });
    }
}

// GET pero por ID
export const getOriginById = async (req, res) => {
    const { id } = req.params;

    try {
        const origin = await Origin.findById(id);

        if (!origin) {
            res.status(404).json({ message: "Origen no encontrado" });
        } else {
            res.status(200).json({ message: "OK", data: origin });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener origen", error });
    }
}

// POST
export const createOrigin = async (req, res) => {
    const { country, region, climate, description } = req.body;

    if (!country || !region || !climate || !description) {
        res.status(400).json({ message: "Faltan datos OBLIGATORIOS", data: { country, region, climate, description } });
    }

    try {
        const newOrigin = new Origin({ country, region, climate, description });
        await newOrigin.save();
        res.status(201).json({ message: "Origen creado", data: newOrigin });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear origen", error });
    }
}

// PUT (update)
export const updateOrigin = async (req, res) => {
    const { id } = req.params;
    const { country, region, climate, description } = req.body;

    try {
        const updatedOrigin = await Origin.findByIdAndUpdate(id, { country, region, climate, description }, { new: true });

        if (!updatedOrigin) {
            res.status(404).json({ message: "Origen no encontrado" });
        } else {
            res.status(200).json({ message: "Origen actualizado", data: updatedOrigin });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar origen", error });
    }
}

// DELETE
export const deleteOrigin = async (req, res) => {
    const { id } = req.params;

    try {
        const origin = await Origin.findByIdAndDelete(id);

        if (!origin) {
            res.status(404).json({ message: "Origen no encontrado" });
        } else {
            res.status(200).json({ message: "Origen eliminado", data: origin });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar origen", error });
    }
}