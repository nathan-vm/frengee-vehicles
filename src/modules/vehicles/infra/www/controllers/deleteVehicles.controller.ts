import { Request, Response } from "express";
import IVehicleRepository from "../../../repositories/IVehicleRepository";

const deleteVehiclesController =
  (repository: IVehicleRepository) => async (req: Request, res: Response) => {
    const { id } = req.params;

    const { success } = await repository.deleteByID(id);

    if (!success) {
      return res.status(404).send();
    }

    res.status(204).send();
  };

export default deleteVehiclesController;
