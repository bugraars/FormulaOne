export interface IResults {
    resultId: number;
    raceId: number;
    driverId: number;
    constructorId: number;
    number: number | null;
    grid: number;
    position: number | null;
    positionText: string;
    positionOrder: number;
    points: number;
    laps: number;
    time: string | null;
    milliseconds: number | null;
    fastestLap: number | null;
    rank: number;
    fastestLapTime: string | null;
    fastestLapSpeed: string | null;
    statusId: number;
}