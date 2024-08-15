import { Router } from "express";
import listVehiclesController from "../controllers/listVehicles.controller";
import createVehiclesController from "../controllers/createVehicles.controller";
import VehicleRepository from "../../database/repositories/VehicleRepository";
import findVehiclesController from "../controllers/findVehicles.controller";
import updateVehiclesController from "../controllers/updateVehicles.controller";
import deleteVehiclesController from "../controllers/deleteVehicles.controller";

const vehicleRoutes = Router();
const vehicleRepository = VehicleRepository();

const listVehiclesControllerHandler = listVehiclesController(vehicleRepository);
const findVehiclesControllerHandler = findVehiclesController(vehicleRepository);
const createVehiclesControllerHandler =
  createVehiclesController(vehicleRepository);
const updateVehiclesControllerHandler =
  updateVehiclesController(vehicleRepository);
const deleteVehiclesControllerHandler =
  deleteVehiclesController(vehicleRepository);

vehicleRoutes.get("/", listVehiclesControllerHandler);

vehicleRoutes.get("/:id", findVehiclesControllerHandler);

vehicleRoutes.post("/", createVehiclesControllerHandler);

vehicleRoutes.put("/:id", updateVehiclesControllerHandler);

vehicleRoutes.delete("/:id", deleteVehiclesControllerHandler);

export default vehicleRoutes;
