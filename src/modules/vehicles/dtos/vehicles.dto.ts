export interface CreateVehicle {
  name: string;
  brand: string;
  year: number;
}

export type UpdateVehicle = Partial<CreateVehicle>;
