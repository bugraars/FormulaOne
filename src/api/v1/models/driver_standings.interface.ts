export interface DriverStandings {
    driverStandingsId: number;
    raceId: number;
    driverId: number;
    points: number;
    position: number | null;
    positionText: string | null;
    wins: number;
  }