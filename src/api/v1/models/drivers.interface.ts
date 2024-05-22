// src/models/drivers.interface.ts
export interface Drivers {
    driverId: number;
    driverRef: string;
    number: number | null;
    code: string | null;
    forename: string;
    surname: string;
    dob: Date | null;
    nationality: string | null;
    url: string;
  }