import { Request, Response } from "express";
import IVehicleRepository from "../../../repositories/IVehicleRepository";
import FindVehiclesService from "../../../services/FindVehicles.service";

const findVehiclesController = (repository: IVehicleRepository) => {
  const findVehiclesService = FindVehiclesService(repository);
  return async (req: Request, res: Response) => {
    const { id } = req.params;
    const vehicles = await findVehiclesService(id);

    res.json({ data: vehicles });
  };
};

export default findVehiclesController;
