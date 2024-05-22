/**
 * @swagger
 * /constructors/list:
 *   get:
 *     summary: Get a list of constructors
 *     tags:
 *       - Constructors
 *     responses:
 *       200:
 *         description: A list of constructors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   country:
 *                     type: string
 */

/**
 * @swagger
 * /constructors/statistics:
 *   get:
 *     summary: Get statistics of all constructors
 *     tags:
 *       - Constructors
 *     responses:
 *       200:
 *         description: Statistics of constructors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalRaces:
 *                   type: integer
 *                 totalWins:
 *                   type: integer
 *                 totalPodiums:
 *                   type: integer
 */

/**
 * @swagger
 * /constructors/search:
 *   post:
 *     summary: Get a filtered list of constructors based on search criteria
 *     tags:
 *       - Constructors
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       200:
 *         description: A filtered list of constructors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   country:
 *                     type: string
 */

/**
 * @swagger
 * /constructors/statistics/{constructorId}/podiums:
 *   get:
 *     summary: Get the number of podiums for a specific constructor
 *     tags:
 *       - Constructors
 *     parameters:
 *       - in: path
 *         name: constructorId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the constructor
 *     responses:
 *       200:
 *         description: The number of podiums for the constructor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 constructorId:
 *                   type: string
 *                 podiums:
 *                   type: integer
 */

/**
 * @swagger
 * /constructors/statistics/{constructorId}/wins:
 *   get:
 *     summary: Get the number of wins for a specific constructor
 *     tags:
 *       - Constructors
 *     parameters:
 *       - in: path
 *         name: constructorId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the constructor
 *     responses:
 *       200:
 *         description: The number of wins for the constructor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 constructorId:
 *                   type: string
 *                 wins:
 *                   type: integer
 */
