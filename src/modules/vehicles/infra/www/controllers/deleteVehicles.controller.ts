import { Request, Response } from "express";
import { getReasonPhrase } from "http-status-codes";
import IVehicleRepository from "../../../repositories/IVehicleRepository";
import DeleteVehiclesService from "../../../services/DeleteVehicles.service";
import HttpError from "../../../../../error/httpError";

const deleteVehiclesController = (repository: IVehicleRepository) => {
  const deleteVehiclesService = DeleteVehiclesService(repository);

  return async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await deleteVehiclesService(id);
      res.status(204).send();
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

export default deleteVehiclesController;
