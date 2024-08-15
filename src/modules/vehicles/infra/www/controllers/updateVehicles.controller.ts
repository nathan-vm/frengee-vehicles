import { Request, Response } from "express";
import IVehicleRepository from "../../../repositories/IVehicleRepository";
import UpdateVehiclesService from "../../../services/UpdateVehicles.service";

const updateVehiclesController = (repository: IVehicleRepository) => {
  const updateVehiclesService = UpdateVehiclesService(repository);

  return async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;

    const data = await updateVehiclesService(id, { name });
    res.json({ data });
    return;
  };
};

export default updateVehiclesController;
