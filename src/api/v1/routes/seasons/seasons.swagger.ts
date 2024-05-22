/**
 * @swagger
 * /seasons/{year}/results:
 *   get:
 *     summary: Get the results for a specific season
 *     tags:
 *       - Seasons
 *     parameters:
 *       - in: path
 *         name: year
 *         required: true
 *         schema:
 *           type: integer
 *         description: The year of the season
 *     responses:
 *       200:
 *         description: The results of the specified season
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   race:
 *                     type: string
 *                   position:
 *                     type: integer
 *                   driver:
 *                     type: string
 *                   constructor:
 *                     type: string
 */

/**
 * @swagger
 * /seasons/{year}/podiums:
 *   get:
 *     summary: Get the podium finishes for a specific season
 *     tags:
 *       - Seasons
 *     parameters:
 *       - in: path
 *         name: year
 *         required: true
 *         schema:
 *           type: integer
 *         description: The year of the season
 *     responses:
 *       200:
 *         description: The podium finishes of the specified season
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   race:
 *                     type: string
 *                   position:
 *                     type: integer
 *                   driver:
 *                     type: string
 *                   constructor:
 *                     type: string
 */

/**
 * @swagger
 * /seasons/{year}/wins:
 *   get:
 *     summary: Get the wins for a specific season
 *     tags:
 *       - Seasons
 *     parameters:
 *       - in: path
 *         name: year
 *         required: true
 *         schema:
 *           type: integer
 *         description: The year of the season
 *     responses:
 *       200:
 *         description: The wins of the specified season
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   race:
 *                     type: string
 *                   driver:
 *                     type: string
 *                   constructor:
 *                     type: string
 */
