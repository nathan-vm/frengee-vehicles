import HttpError from "../../../error/httpError";
import IVehicleRepository from "../repositories/IVehicleRepository";
import VehicleRepositoryMock from "../repositories/VehicleRepositoryMock";
import FindVehiclesService from "./FindVehicles.service";

let findVehiclesService: ReturnType<typeof FindVehiclesService>;
let vehicleRepositoryTest: IVehicleRepository;

describe("Find Vehicles Service Test Suit", () => {
  beforeAll(() => {
    vehicleRepositoryTest = VehicleRepositoryMock();
    findVehiclesService = FindVehiclesService(vehicleRepositoryTest);
  });

  it("should be able to find a Vehicle", async () => {
    await vehicleRepositoryTest.create({
      name: "Test_1",
      brand: "Test_Brand",
      year: 2024,
    });
    const vehicle = await vehicleRepositoryTest.create({
      name: "Test_2",
      brand: "Test_Brand",
      year: 2024,
    });
    await vehicleRepositoryTest.create({
      name: "Test_3",
      brand: "Test_Brand",
      year: 2024,
    });

    const founded = await findVehiclesService(String(vehicle._id));

    expect(founded._id).toBe(vehicle._id);
  });

  it("should throw when not found.", async () => {
    expect(
      async () => await findVehiclesService("Not ID"),
    ).rejects.toBeInstanceOf(HttpError);
  });
});
