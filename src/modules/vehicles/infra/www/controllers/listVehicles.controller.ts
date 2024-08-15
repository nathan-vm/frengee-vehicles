import { Request, Response } from "express";
import IVehicleRepository from "../../../repositories/IVehicleRepository";

const listVehiclesController =
  (repository: IVehicleRepository) => async (req: Request, res: Response) => {
    const vehicles = await repository.list();
    res.json({ data: vehicles });
  };

export default listVehiclesController;
