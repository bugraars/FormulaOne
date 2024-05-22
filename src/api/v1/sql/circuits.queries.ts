export const getCircuitStatisticsQuery = () => `
    SELECT 
        c.name AS circuitName, 
        r.name AS raceName, 
        MIN(res.milliseconds) AS fastestLapTime, 
        (
            SELECT CONCAT(d.forename, ' ', d.surname) 
            FROM drivers d 
            JOIN results rs ON d.driverId = rs.driverId 
            WHERE rs.raceId = r.raceId 
            ORDER BY rs.positionOrder ASC 
            LIMIT 1
        ) AS raceWinner
    FROM races r
    JOIN circuits c ON r.circuitId = c.circuitId
    JOIN results res ON r.raceId = res.raceId
    GROUP BY c.name, r.name, r.raceId
    ORDER BY c.name;
`;
