export interface IRaces {
    raceId: number;
    year: number;
    round: number;
    circuitId: number;
    name: string;
    date: string;
    time: string;
    url: string;
    fp1_date: string | null;
    fp1_time: string | null;
    fp2_date: string | null;
    fp2_time: string | null;
    fp3_date: string | null;
    fp3_time: string | null;
    quali_date: string | null;
    quali_time: string | null;
    sprint_date: string | null;
    sprint_time: string | null;
}