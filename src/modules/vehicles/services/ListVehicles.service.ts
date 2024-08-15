import IVehicleRepository from "../repositories/IVehicleRepository";

const ListVehiclesService = (repository: IVehicleRepository) => async () => {
  const vehicles = await repository.list();
  return vehicles;
};

export default ListVehiclesService;
