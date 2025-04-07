//Importar rutas
import coffeesRoutes from "./coffeesRoutes.js";
import originsRoutes from "./originsRoutes.js";

//llamamos a las rutas en esta funcion y las exportamos
function routerAPI(app) {
    app.use("/api/coffees", coffeesRoutes);
    app.use("/api/origins", originsRoutes);
}

export default routerAPI;