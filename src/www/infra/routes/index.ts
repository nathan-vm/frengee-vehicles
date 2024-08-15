import { Router } from "express";
import vehicleRoutes from "../../../modules/vehicles/infra/www/routes";

const routes = Router();

routes.use(vehicleRoutes);

export default routes;
