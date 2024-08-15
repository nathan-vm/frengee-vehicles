import { Request, Response } from "express";
import { getReasonPhrase } from "http-status-codes";
import IVehicleRepository from "../../../repositories/IVehicleRepository";
import CreateVehiclesService from "../../../services/CreateVehicles.service";
import HttpError from "../../../../../error/httpError";

const CreateVehiclesController = (repository: IVehicleRepository) => {
  const createVehiclesService = CreateVehiclesService(repository);

  return async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
      const vehicles = await createVehiclesService({ name });

      res.status(201).json({ data: vehicles });
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

export default CreateVehiclesController;
