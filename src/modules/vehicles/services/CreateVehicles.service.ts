import HttpError from "../../../error/httpError";
import { CreateVehicle } from "../dtos/vehicles.dto";
import IVehicleRepository from "../repositories/IVehicleRepository";

const CreateVehiclesService =
  (repository: IVehicleRepository) => async (newVehicle: CreateVehicle) => {
    if (!newVehicle.brand || !newVehicle.name || !newVehicle.year) {
      throw new HttpError("Missing parameters", 404);
    }

    const vehicle = await repository.create(newVehicle);
    return vehicle;
  };

export default CreateVehiclesService;
