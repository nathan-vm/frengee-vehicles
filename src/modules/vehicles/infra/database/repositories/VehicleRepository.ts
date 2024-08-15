import { Collection, MongoClient, ObjectId } from "mongodb";
import IVehicleRepository from "../../../repositories/IVehicleRepository";
import environment from "../../../../../config/environment";
import Vehicle from "../entities/Vehicles";

export default function VehicleRepository(): IVehicleRepository {
  let repository!: Collection<Vehicle>;

  MongoClient.connect(environment.DB_URL)
    .then((db) => {
      repository = db.db(environment.DB_NAME).collection<Vehicle>("vehicles");
    })
    .catch((e) => {
      console.log(e);
      throw e;
    });

  const list = async (): Promise<Vehicle[]> => {
    return await repository.find({}).toArray();
  };

  const findByID = async (id: string): Promise<Vehicle | null> => {
    return await repository.findOne({ _id: new ObjectId(id) });
  };

  const create = async (data: Omit<Vehicle, "_id">): Promise<Vehicle> => {
    const vehicle: Vehicle = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const { insertedId } = await repository.insertOne(vehicle);

    const inserted = await repository.findOne({ _id: insertedId });

    return inserted as Vehicle;
  };

  const deleteByID = async (
    id: string,
  ): Promise<{ success: boolean; message: string }> => {
    const { deletedCount } = await repository.deleteOne({
      _id: new ObjectId(id),
    });

    if (deletedCount === 1) {
      return { success: true, message: `Deleted Vehicle ID: ${id}` };
    } else {
      return { success: false, message: `Error deleting vehicle ID ${id}` };
    }
  };

  const updateByID = async (
    id: string,
    updated: Partial<Omit<Vehicle, "_id">>,
  ): Promise<Vehicle | null> => {
    const _id = new ObjectId(id);

    await repository.updateOne(
      { _id },
      {
        $set: { ...updated, updatedAt: new Date() },
      },
    );

    const data = await repository.findOne({ _id });

    return data;
  };

  return {
    create,
    deleteByID,
    findByID,
    list,
    updateByID,
  };
}
