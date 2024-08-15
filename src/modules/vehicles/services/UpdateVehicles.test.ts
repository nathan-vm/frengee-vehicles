import IVehicleRepository from "../repositories/IVehicleRepository";
import VehicleRepositoryMock from "../repositories/VehicleRepositoryMock";
import UpdateVehiclesService from "./UpdateVehicles.service";

let updateVehiclesService: ReturnType<typeof UpdateVehiclesService>;
let vehicleRepositoryTest: IVehicleRepository;

describe("Delete Vehicles Service Test Suit", () => {
  beforeAll(() => {
    vehicleRepositoryTest = VehicleRepositoryMock();
    updateVehiclesService = UpdateVehiclesService(vehicleRepositoryTest);
  });

  it("should be able to create a Vehicle", async () => {
    await vehicleRepositoryTest.create({ name: "Test_1" });
    await vehicleRepositoryTest.create({ name: "Test_2" });
    const vehicle = await vehicleRepositoryTest.create({ name: "Test_3" });

    const updated = await updateVehiclesService(String(vehicle._id), {
      name: "New Name",
    });

    expect(updated?.name).toBe("New Name");
  });
});
