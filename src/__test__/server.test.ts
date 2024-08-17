import request from "supertest";
import { Server } from "http";
import app from "../www/infra/app";

describe("Frengee Vehicles API2", () => {
  let createdVehicleId: string;
  let server: Server;
  beforeAll(async () => {
    server = app.listen(3241);
  });

  afterAll(async () => {
    server.close();
  });

  // Test GET /vehicles
  it("should list all vehicles", async () => {
    const response = await request(server).get("/api/v1/vehicles");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  // Test POST /vehicles
  it("should add a new vehicle", async () => {
    const vehicleData = { name: "BMW", year: 2000, brand: "brand" };
    const response = await request(server)
      .post("/api/v1/vehicles")
      .send(vehicleData)
      .set("Content-Type", "application/json");
    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty("_id");
    expect(response.body.data.name).toBe(vehicleData.name);
    createdVehicleId = response.body.data._id;
  });

  // Test GET /vehicles/:id
  it("should find a vehicle by ID", async () => {
    if (!createdVehicleId) {
      throw new Error("No vehicle created, cannot test GET /vehicles/:id");
    }

    const response = await request(server).get(
      `/api/v1/vehicles/${createdVehicleId}`,
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toHaveProperty("_id", createdVehicleId);
  });

  // Test PUT /vehicles/:id
  it("should update a vehicle by ID", async () => {
    if (!createdVehicleId) {
      throw new Error("No vehicle created, cannot test PUT /vehicles/:id");
    }

    const updatedData = { name: "Audi" };
    const response = await request(server)
      .put(`/api/v1/vehicles/${createdVehicleId}`)
      .send(updatedData)
      .set("Content-Type", "application/json");
    expect(response.statusCode).toBe(200);
    expect(response.body.data.name).toBe(updatedData.name);
  });

  // Test DELETE /vehicles/:id
  it("should delete a vehicle by ID", async () => {
    if (!createdVehicleId) {
      throw new Error("No vehicle created, cannot test DELETE /vehicles/:id");
    }

    const response = await request(server).delete(
      `/api/v1/vehicles/${createdVehicleId}`,
    );
    expect(response.statusCode).toBe(204);

    // Verify that the vehicle was deleted
    const findResponse = await request(server).get(
      `/api/v1/vehicles/${createdVehicleId}`,
    );
    expect(findResponse.statusCode).toBe(404);
  });
});
