import { CreateVehicle } from "../dtos/vehicles.dto";
import IVehicleRepository from "../repositories/IVehicleRepository";

const CreateVehiclesService =
  (repository: IVehicleRepository) => async (newVehicle: CreateVehicle) => {
    const vehicle = await repository.create(newVehicle);

    return vehicle;
  };

export default CreateVehiclesService;
