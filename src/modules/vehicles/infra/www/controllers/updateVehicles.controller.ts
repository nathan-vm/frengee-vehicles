import { Request, Response } from "express";
import IVehicleRepository from "../../../repositories/IVehicleRepository";
import UpdateVehiclesService from "../../../services/UpdateVehicles.service";
import HttpError from "../../../../../error/httpError";
import { getReasonPhrase } from "http-status-codes";

const updateVehiclesController = (repository: IVehicleRepository) => {
  const updateVehiclesService = UpdateVehiclesService(repository);

  return async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const data = await updateVehiclesService(id, { name });
      res.json({ data });
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

export default updateVehiclesController;
