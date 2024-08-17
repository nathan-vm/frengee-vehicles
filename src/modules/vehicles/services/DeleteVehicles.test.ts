import HttpError from "../../../error/httpError";
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

  it("should be able to delete a Vehicle", async () => {
    const name = "Test_Name";
    const vehicle = await vehicleRepositoryTest.create({
      name,
      brand: "Test_Brand",
      year: 2024,
    });

    await deleteVehiclesService(String(vehicle._id));

    const data = await vehicleRepositoryTest.list();

    expect(data.length).toBe(0);
  });

  it("shouldn't be able to delete not found Vehicle", async () => {
    expect(
      async () => await deleteVehiclesService("NOT_ID"),
    ).rejects.toBeInstanceOf(HttpError);
  });
});
