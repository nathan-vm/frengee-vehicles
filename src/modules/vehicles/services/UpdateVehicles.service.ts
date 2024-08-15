import IVehicleRepository from "../repositories/IVehicleRepository";
import { UpdateVehicle } from "../dtos/vehicles.dto";

const UpdateVehiclesService =
  (repository: IVehicleRepository) =>
  async (id: string, updatedVehicle: UpdateVehicle) => {
    const data = await repository.updateByID(id, updatedVehicle);

    return data;
  };

export default UpdateVehiclesService;
