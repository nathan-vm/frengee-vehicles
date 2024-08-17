import IVehicleRepository from "../repositories/IVehicleRepository";
import VehicleRepositoryMock from "../repositories/VehicleRepositoryMock";
import ListVehiclesService from "./ListVehicles.service";

let listVehiclesService: ReturnType<typeof ListVehiclesService>;
let vehicleRepositoryTest: IVehicleRepository;

describe("List Vehicles Service Test Suit", () => {
  beforeAll(() => {
    vehicleRepositoryTest = VehicleRepositoryMock();
    listVehiclesService = ListVehiclesService(vehicleRepositoryTest);
  });

  it("should be able to List all Vehicles", async () => {
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
    await vehicleRepositoryTest.create({
      name: "Test_3",
      brand: "Test_Brand",
      year: 2024,
    });

    const list = await listVehiclesService();

    expect(list.length).toBe(3);
  });
});
