export interface LapTimes {
    raceId: number;
    driverId: number;
    lap: number;
    position: number | null;
    time: string | null;
    milliseconds: number | null;
  }