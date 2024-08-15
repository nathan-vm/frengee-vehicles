export interface CreateVehicle {
  name: string;
}

export type UpdateVehicle = Partial<CreateVehicle>;
