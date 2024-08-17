import HttpError from "../../../error/httpError";
import Vehicle from "../infra/database/entities/Vehicles";
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

    const vehicle = await createVehiclesService({
      name,
      brand: "Test_Brand",
      year: 2024,
    });

    expect(vehicle.name).toBe("Test_Name");
  });

  it("should not be able to create a Vehicle with missing params.", async () => {
    expect(
      async () =>
        await createVehiclesService({
          name: "Test_Name",
          // missing brand
          year: 2024,
        } as Vehicle),
    ).rejects.toBeInstanceOf(HttpError);
  });
});
