import VehicleRepositoryMock from "../repositories/VehicleRepositoryMock";
import CreateVehiclesService from "./CreateVehicles.service";

let createVehiclesService: ReturnType<typeof CreateVehiclesService>;

describe("Create Vehicles Service Test Suit", () => {
  beforeAll(() => {
    const vehicleRepositoryTest = VehicleRepositoryMock();
    createVehiclesService = CreateVehiclesService(vehicleRepositoryTest);
  });

  it("should be able to create a Vehicle", async () => {
    const name = "Test_Name";

    const vehicle = await createVehiclesService({ name });

    expect(vehicle.name).toBe("Test_Name");
  });
});
