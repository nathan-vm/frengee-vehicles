import { Request, Response } from "express";
import IVehicleRepository from "../../../repositories/IVehicleRepository";
import DeleteVehiclesService from "../../../services/DeleteVehicles.service";

const deleteVehiclesController = (repository: IVehicleRepository) => {
  const deleteVehiclesService = DeleteVehiclesService(repository);

  return async (req: Request, res: Response) => {
    const { id } = req.params;
    await deleteVehiclesService(id);
    res.status(204).send();
    return;
  };
};

export default deleteVehiclesController;
