import { ObjectId } from "mongodb";
import Vehicle from "../infra/database/entities/Vehicles";
import IVehicleRepository from "./IVehicleRepository";
import { CreateVehicle, UpdateVehicle } from "../dtos/vehicles.dto";

type VehicleMock = Omit<Vehicle, "_id"> & {
  _id: string;
};

export default (): IVehicleRepository => {
  const data: VehicleMock[] = [];

  const list = async () => {
    return data;
  };

  const findByID = async (id: string) => {
    return data.find((v) => v._id === id) ?? null;
  };

  const create = async (newVehicle: CreateVehicle) => {
    const vehicle: VehicleMock = {
      _id: new ObjectId().toString(),
      ...newVehicle,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    data.push(vehicle);

    return vehicle;
  };

  const deleteByID = async (id: string) => {
    const index = data.findIndex((v) => v._id === id);

    if (index >= 0) {
      data.splice(index, 1);
      return { success: true, message: "" };
    }
    return { success: false, message: "" };
  };

  const updateByID = async (id: string, updatedVehicle: UpdateVehicle) => {
    const index = data.findIndex((v) => v._id === id);
    if (index >= 0) {
      data[index] = {
        ...data[index],
        ...updatedVehicle,
      };
      return data[index];
    }
    return null;
  };

  return {
    list,
    findByID,
    create,
    deleteByID,
    updateByID,
  } as unknown as IVehicleRepository;
};
