import IVehicleRepository from "../repositories/IVehicleRepository";
import HttpError from "../../../error/httpError";

const FindVehiclesService =
  (repository: IVehicleRepository) => async (id: string) => {
    const vehicle = await repository.findByID(id);

    if (!vehicle) {
      throw new HttpError("Vehicle not found", 404);
    }

    return vehicle;
  };

export default FindVehiclesService;
