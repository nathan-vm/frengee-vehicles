import IVehicleRepository from "../repositories/IVehicleRepository";
import VehicleRepositoryMock from "../repositories/VehicleRepositoryMock";
import DeleteVehiclesService from "./DeleteVehicles.service";

let deleteVehiclesService: ReturnType<typeof DeleteVehiclesService>;
let vehicleRepositoryTest: IVehicleRepository;

describe("Delete Vehicles Service Test Suit", () => {
  beforeAll(() => {
    vehicleRepositoryTest = VehicleRepositoryMock();
    deleteVehiclesService = DeleteVehiclesService(vehicleRepositoryTest);
  });

  it("should be able to create a Vehicle", async () => {
    const name = "Test_Name";
    const vehicle = await vehicleRepositoryTest.create({ name });

    await deleteVehiclesService(String(vehicle._id));

    const data = await vehicleRepositoryTest.list();

    expect(data.length).toBe(0);
  });
});
