import HttpError from "../../../error/httpError";
import Vehicle from "../infra/database/entities/Vehicles";
import IVehicleRepository from "../repositories/IVehicleRepository";
import VehicleRepositoryMock from "../repositories/VehicleRepositoryMock";
import UpdateVehiclesService from "./UpdateVehicles.service";

let updateVehiclesService: ReturnType<typeof UpdateVehiclesService>;
let vehicleRepositoryTest: IVehicleRepository;

describe("Update Vehicles Service Test Suit", () => {
  beforeAll(() => {
    vehicleRepositoryTest = VehicleRepositoryMock();
    updateVehiclesService = UpdateVehiclesService(vehicleRepositoryTest);
  });

  it("should be able to create a Vehicle", async () => {
    await vehicleRepositoryTest.create({
      name: "Test_1",
      brand: "Test_Brand",
      year: 2024,
    });
    await vehicleRepositoryTest.create({
      name: "Test_2",
      brand: "Test_Brand",
      year: 2024,
    });
    const vehicle = await vehicleRepositoryTest.create({
      name: "Test_3",
      brand: "Test_Brand",
      year: 2024,
    });

    const updated = await updateVehiclesService(String(vehicle._id), {
      name: "New Name",
    });

    expect(updated?.name).toBe("New Name");
  });

  it("shouldn't be able to update not found Vehicle", async () => {
    expect(
      async () => await updateVehiclesService("NOT_ID", {} as Vehicle),
    ).rejects.toBeInstanceOf(HttpError);
  });
});
