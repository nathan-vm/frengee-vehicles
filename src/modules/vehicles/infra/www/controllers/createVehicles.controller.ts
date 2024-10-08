import { Request, Response } from "express";
import IVehicleRepository from "../../../repositories/IVehicleRepository";
import CreateVehiclesService from "../../../services/CreateVehicles.service";

const CreateVehiclesController = (repository: IVehicleRepository) => {
  const createVehiclesService = CreateVehiclesService(repository);

  return async (req: Request, res: Response) => {
    const data = req.body;
    const vehicles = await createVehiclesService(data);

    res.status(201).json({ data: vehicles });
  };
};

export default CreateVehiclesController;
