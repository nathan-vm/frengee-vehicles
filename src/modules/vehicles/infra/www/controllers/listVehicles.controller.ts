import { Request, Response } from "express";
import { getReasonPhrase } from "http-status-codes";
import IVehicleRepository from "../../../repositories/IVehicleRepository";
import ListVehiclesService from "../../../services/ListVehicles.service";
import HttpError from "../../../../../error/httpError";

const listVehiclesController = (repository: IVehicleRepository) => {
  const listVehiclesService = ListVehiclesService(repository);

  return async (_: Request, res: Response) => {
    try {
      const vehicles = await listVehiclesService();
      res.json({ data: vehicles });
      return;
    } catch (e) {
      if (e instanceof HttpError) {
        res.status(e.statusCode).json({
          error: getReasonPhrase(e.statusCode),
        });
        return;
      }
      res.status(500).json({
        error: getReasonPhrase(500),
      });
    }
  };
};

export default listVehiclesController;
