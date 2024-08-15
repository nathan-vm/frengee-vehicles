import HttpError from "../../../error/httpError";
import IVehicleRepository from "../repositories/IVehicleRepository";

const DeleteVehiclesService =
  (repository: IVehicleRepository) => async (id: string) => {
    const { success, message } = await repository.deleteByID(id);

    if (!success) {
      throw new HttpError(message, 404);
    }

    return;
  };

export default DeleteVehiclesService;
