import { Request, Response } from "express";
import IVehicleRepository from "../../../repositories/IVehicleRepository";

const updateVehiclesController =
  (repository: IVehicleRepository) => async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;

    const data = await repository.updateByID(id, { name });

    res.json({ data });
  };

export default updateVehiclesController;
