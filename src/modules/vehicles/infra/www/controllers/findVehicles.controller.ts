import { Request, Response } from "express";
import { getReasonPhrase } from "http-status-codes";
import IVehicleRepository from "../../../repositories/IVehicleRepository";
import HttpError from "../../../../../error/httpError";
import FindVehiclesService from "../../../services/FindVehicles.service";

const findVehiclesController = (repository: IVehicleRepository) => {
  const findVehiclesService = FindVehiclesService(repository);
  return async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const vehicles = await findVehiclesService(id);

      res.json({ data: vehicles });
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

export default findVehiclesController;
