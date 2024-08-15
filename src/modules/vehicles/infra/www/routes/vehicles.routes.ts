import { Router } from "express";
import VehicleRepository from "../../database/repositories/VehicleRepository";

import ListVehiclesController from "../controllers/ListVehicles.controller";
import CreateVehiclesController from "../controllers/CreateVehicles.controller";
import FindVehiclesController from "../controllers/FindVehicles.controller";
import UpdateVehiclesController from "../controllers/UpdateVehicles.controller";
import DeleteVehiclesController from "../controllers/DeleteVehicles.controller";

const vehicleRoutes = Router();
const vehicleRepository = VehicleRepository();

const listVehiclesController = ListVehiclesController(vehicleRepository);
const findVehiclesController = FindVehiclesController(vehicleRepository);
const createVehiclesController = CreateVehiclesController(vehicleRepository);
const updateVehiclesController = UpdateVehiclesController(vehicleRepository);
const deleteVehiclesController = DeleteVehiclesController(vehicleRepository);

vehicleRoutes.get("/", listVehiclesController);

vehicleRoutes.get("/:id", findVehiclesController);

vehicleRoutes.post("/", createVehiclesController);

vehicleRoutes.put("/:id", updateVehiclesController);

vehicleRoutes.delete("/:id", deleteVehiclesController);

export default vehicleRoutes;
