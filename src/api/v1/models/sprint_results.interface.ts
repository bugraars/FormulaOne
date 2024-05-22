export interface ISprintResults {
    resultId: number;
    raceId: number;
    driverId: number;
    constructorId: number;
    number: number;
    grid: number;
    position: number;
    positionText: string;
    positionOrder: number;
    points: number;
    laps: number;
    time: string;
    milliseconds: number;
    fastestLap: number;
    fastestLapTime: string;
    statusId: number;
}