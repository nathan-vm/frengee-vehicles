import { Router } from "express";
import vehicleRoutes from "../../../modules/vehicles/infra/www/routes";

const routes = Router();

routes.use("/api/v1/vehicles", vehicleRoutes);

export default routes;
