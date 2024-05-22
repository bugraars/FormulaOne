const getSeasonResultsQuery = (year: number) => `
    SELECT r.raceId, r.name as raceName, res.driverId, d.forename, d.surname, res.position, res.points
    FROM races r
    JOIN results res ON r.raceId = res.raceId
    JOIN drivers d ON res.driverId = d.driverId
    WHERE r.year = ${year}
    ORDER BY r.raceId, res.position;
`;
const getSeasonWinsQuery = (year: number) => `
    SELECT d.driverId, d.forename, d.surname, COUNT(res.positionOrder) as wins
    FROM results res
    JOIN races r ON res.raceId = r.raceId
    JOIN drivers d ON res.driverId = d.driverId
    WHERE r.year = ${year} AND res.positionOrder = 1
    GROUP BY d.driverId, d.forename, d.surname
    ORDER BY wins DESC;
`;

const getSeasonPodiumsQuery = (year: number) => `
    SELECT d.driverId, d.forename, d.surname, COUNT(res.positionOrder) as podiums
    FROM results res
    JOIN races r ON res.raceId = r.raceId
    JOIN drivers d ON res.driverId = d.driverId
    WHERE r.year = ${year} AND res.positionOrder IN (1, 2, 3)
    GROUP BY d.driverId, d.forename, d.surname
    ORDER BY podiums DESC;
`;

export { getSeasonResultsQuery, getSeasonWinsQuery, getSeasonPodiumsQuery };
