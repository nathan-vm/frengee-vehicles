import { Request, Response } from "express";
import IVehicleRepository from "../../../repositories/IVehicleRepository";

const findVehiclesController =
  (repository: IVehicleRepository) => async (req: Request, res: Response) => {
    const { id } = req.params;

    const vehicles = await repository.findByID(id);

    if (!vehicles) {
      return res.status(404).send();
    }

    res.json({ data: vehicles });
  };

export default findVehiclesController;
