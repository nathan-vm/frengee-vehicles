import { Request, Response } from "express";
import IVehicleRepository from "../../../repositories/IVehicleRepository";
import ListVehiclesService from "../../../services/ListVehicles.service";

const ListVehiclesController = (repository: IVehicleRepository) => {
  const listVehiclesService = ListVehiclesService(repository);

  return async (_: Request, res: Response) => {
    const vehicles = await listVehiclesService();
    res.json({ data: vehicles });
    return;
  };
};

export default ListVehiclesController;
