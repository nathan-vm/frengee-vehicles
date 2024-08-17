/* eslint-disable no-unused-vars */
import { CreateVehicle, UpdateVehicle } from "../dtos/vehicles.dto";
import Vehicle from "../infra/database/entities/Vehicles";

export default interface IVehicleRepository {
  list(): Promise<Vehicle[]>;
  create(vehicle: CreateVehicle): Promise<Vehicle>;
  findByID(id: string): Promise<Vehicle | null>;
  updateByID(id: string, updated: UpdateVehicle): Promise<Vehicle | null>;
  deleteByID(id: string): Promise<{ success: boolean; message: string }>;
}
