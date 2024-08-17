import IVehicleRepository from "../repositories/IVehicleRepository";
import { UpdateVehicle } from "../dtos/vehicles.dto";
import HttpError from "../../../error/httpError";

const UpdateVehiclesService =
  (repository: IVehicleRepository) =>
  async (id: string, updatedVehicle: UpdateVehicle) => {
    const data = await repository.updateByID(id, updatedVehicle);

    if (data === null) {
      throw new HttpError("Cant found vehicle", 404);
    }

    return data;
  };

export default UpdateVehiclesService;
