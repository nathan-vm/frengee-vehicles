import { ObjectId } from "mongodb";

export default interface Vehicle {
  _id?: ObjectId;
  name: string;
  brand: string;
  year: number;
  createdAt: Date;
  updatedAt: Date;
}
