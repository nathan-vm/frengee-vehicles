import { Router } from "express";
import VehicleRepository from "../../database/repositories/VehicleRepository";

import ListVehiclesController from "../controllers/ListVehicles.controller";
import CreateVehiclesController from "../controllers/CreateVehicles.controller";
import FindVehiclesController from "../controllers/FindVehicles.controller";
import UpdateVehiclesController from "../controllers/UpdateVehicles.controller";
import DeleteVehiclesController from "../controllers/DeleteVehicles.controller";

import findVehiclesValidator from "../validators/findVehicles.validator";
import createVehiclesValidator from "../validators/createVehicles.validator";
import deleteVehiclesValidator from "../validators/deleteVehicles.validator";
import updateVehiclesValidator from "../validators/updateVehicles.validator";
import environment from "../../../../../config/environment";
import VehicleRepositoryMock from "../../../repositories/VehicleRepositoryMock";

const vehicleRoutes = Router();
const vehicleRepository =
  environment.NODE_ENV !== "test"
    ? VehicleRepository()
    : VehicleRepositoryMock();

const listVehiclesController = ListVehiclesController(vehicleRepository);
const findVehiclesController = FindVehiclesController(vehicleRepository);
const createVehiclesController = CreateVehiclesController(vehicleRepository);
const updateVehiclesController = UpdateVehiclesController(vehicleRepository);
const deleteVehiclesController = DeleteVehiclesController(vehicleRepository);

vehicleRoutes.get("/vehicles", listVehiclesController);

vehicleRoutes.get(
  "/vehicles/:id",
  findVehiclesValidator,
  findVehiclesController,
);

vehicleRoutes.post(
  "/vehicles",
  createVehiclesValidator,
  createVehiclesController,
);

vehicleRoutes.put(
  "/vehicles/:id",
  updateVehiclesValidator,
  updateVehiclesController,
);

vehicleRoutes.delete(
  "/vehicles/:id",
  deleteVehiclesValidator,
  deleteVehiclesController,
);

export default vehicleRoutes;
