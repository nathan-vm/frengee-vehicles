import { Request, Response } from "express";
import IVehicleRepository from "../../../repositories/IVehicleRepository";
import UpdateVehiclesService from "../../../services/UpdateVehicles.service";

const updateVehiclesController = (repository: IVehicleRepository) => {
  const updateVehiclesService = UpdateVehiclesService(repository);

  return async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    const vehicle = await updateVehiclesService(id, data);
    res.json({ data: vehicle });
    return;
  };
};

export default updateVehiclesController;
