const getConstructorsQuery = `
    SELECT constructorId, constructorRef, name, nationality, url
    FROM constructors;
`;
const getConstructorStatisticsQuery = `
    SELECT c.name, c.nationality, COUNT(r.positionOrder) as wins
    FROM results r
    JOIN constructors c ON r.constructorId = c.constructorId
    WHERE r.positionOrder = 1
    GROUP BY c.name, c.nationality
    ORDER BY wins DESC;
`;

const getFilteredConstructorsQuery = (filters: any) => {
  let query =
    "SELECT constructorId, constructorRef, name, nationality, url FROM constructors WHERE 1=1";

  if (filters.name) {
    query += ` AND name LIKE '%${filters.name}%'`;
  }
  if (filters.nationality) {
    query += ` AND nationality = '${filters.nationality}'`;
  }

  return query;
};
const getConstructorWinsQuery = (constructorId: number) => `
    SELECT COUNT(*) as wins
    FROM results
    WHERE constructorId = ${constructorId} AND positionOrder = 1;
`;
 const getConstructorPodiumsQuery = (constructorId: number) => `
    SELECT COUNT(*) as podiums
    FROM results
    WHERE constructorId = ${constructorId} AND positionOrder IN (1, 2, 3);
`;


export {
  getConstructorsQuery,
  getConstructorStatisticsQuery,
  getFilteredConstructorsQuery,
  getConstructorWinsQuery,
  getConstructorPodiumsQuery,

};
