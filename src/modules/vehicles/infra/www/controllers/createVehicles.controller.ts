import { Request, Response } from "express";
import IVehicleRepository from "../../../repositories/IVehicleRepository";

const createVehiclesController =
  (repository: IVehicleRepository) => async (req: Request, res: Response) => {
    const { name } = req.body;

    const vehicles = await repository.create({
      name,
    });

    res.status(201).json({ data: vehicles });
  };

export default createVehiclesController;
