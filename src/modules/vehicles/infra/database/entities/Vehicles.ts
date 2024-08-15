import { ObjectId } from "mongodb";

export default interface Vehicle {
  _id?: ObjectId;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
