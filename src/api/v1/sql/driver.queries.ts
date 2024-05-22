const getDriversQuery = `
    SELECT driverId, driverRef, number, code, forename, surname, dob, nationality, url
    FROM drivers;
`;

const getDriverStatisticsQuery = `
    SELECT d.forename, d.surname, COUNT(r.positionOrder) as wins
    FROM results r
    JOIN drivers d ON r.driverId = d.driverId
    WHERE r.positionOrder = 1
    GROUP BY d.forename, d.surname
    ORDER BY wins DESC;
`;
const getFilteredDriversQuery = (filters: any) => {
  let query =
    "SELECT driverId, driverRef, number, code, forename, surname, dob, nationality, url FROM drivers WHERE 1=1";

  if (filters.forename) {
    query += ` AND forename LIKE '%${filters.forename}%'`;
  }
  if (filters.surname) {
    query += ` AND surname LIKE '%${filters.surname}%'`;
  }
  if (filters.nationality) {
    query += ` AND nationality = '${filters.nationality}'`;
  }
  if (filters.dob) {
    query += ` AND dob = '${filters.dob}'`;
  }

  return query;
};

const getDriverWinsQuery = (driverId: number) => `
    SELECT COUNT(*) as wins
    FROM results
    WHERE driverId = ${driverId} AND positionOrder = 1;
`;

const getDriverPodiumsQuery = (driverId: number) => `
    SELECT COUNT(*) as podiums
    FROM results
    WHERE driverId = ${driverId} AND positionOrder IN (1, 2, 3);
`;

const getDriverDNFsQuery = (driverId: number) => `
    SELECT COUNT(*) as dnfs
    FROM results
    WHERE driverId = ${driverId} AND statusId != 1; -- Assuming statusId != 1 indicates a DNF
`;

const getDriverAverageLapTimesQuery = (driverId: number) => `
    SELECT c.name as circuitName, r.year, AVG(lt.milliseconds) as avgLapTime
    FROM lap_times lt
    JOIN races r ON lt.raceId = r.raceId
    JOIN circuits c ON r.circuitId = c.circuitId
    WHERE lt.driverId = ${driverId}
    GROUP BY c.name, r.year
    ORDER BY r.year, c.name;
`;
const getDriverAverageLapTimesWithSeasonsQuery = (
  season: number,
  raceId: number
) => `
    SELECT d.driverId, d.forename, d.surname, AVG(lt.milliseconds) as avgLapTime
    FROM lap_times lt
    JOIN drivers d ON lt.driverId = d.driverId
    JOIN races r ON lt.raceId = r.raceId
    WHERE r.year = ${season} AND lt.raceId = ${raceId}
    GROUP BY d.driverId, d.forename, d.surname
    ORDER BY d.driverId;
`;

const getDriverAveragePitTimesWithSeasonsQuery = (
  season: number,
  raceId: number
) => `
    SELECT d.driverId, d.forename, d.surname, AVG(ps.milliseconds) as avgPitTime
    FROM pit_stops ps
    JOIN drivers d ON ps.driverId = d.driverId
    JOIN races r ON ps.raceId = r.raceId
    WHERE r.year = ${season} AND ps.raceId = ${raceId}
    GROUP BY d.driverId, d.forename, d.surname
    ORDER BY d.driverId;
`;

const getDriverPitCountsWithSeasonsQuery = (season: number, raceId: number) => `
    SELECT d.driverId, d.forename, d.surname, COUNT(ps.stop) as pitCount
    FROM pit_stops ps
    JOIN drivers d ON ps.driverId = d.driverId
    JOIN races r ON ps.raceId = r.raceId
    WHERE r.year = ${season} AND ps.raceId = ${raceId}
    GROUP BY d.driverId, d.forename, d.surname
    ORDER BY d.driverId;
`;
export const getDriverPitAnalysisQuery = (season: number, raceId: number) => `
    SELECT 
        d.driverId, 
        d.forename, 
        d.surname, 
        AVG(ps.milliseconds) as avgPitTime, 
        array_agg(ps.lap) as pitLaps
    FROM pit_stops ps
    JOIN drivers d ON ps.driverId = d.driverId
    JOIN races r ON ps.raceId = r.raceId
    WHERE r.year = ${season} AND ps.raceId = ${raceId}
    GROUP BY d.driverId, d.forename, d.surname
    ORDER BY d.driverId;
`;

export {
  getDriversQuery,
  getDriverStatisticsQuery,
  getFilteredDriversQuery,
  getDriverWinsQuery,
  getDriverPodiumsQuery,
  getDriverDNFsQuery,
  getDriverAverageLapTimesQuery,
  getDriverPitCountsWithSeasonsQuery,
  getDriverAveragePitTimesWithSeasonsQuery,
  getDriverAverageLapTimesWithSeasonsQuery,
};
