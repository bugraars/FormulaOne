/**
 * @swagger
 * /drivers/list:
 *   get:
 *     summary: Get a list of drivers
 *     tags:
 *       - Drivers
 *     responses:
 *       200:
 *         description: A list of drivers
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
 *                   nationality:
 *                     type: string
 */

/**
 * @swagger
 * /drivers/search:
 *   post:
 *     summary: Get a filtered list of drivers based on search criteria
 *     tags:
 *       - Drivers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               nationality:
 *                 type: string
 *     responses:
 *       200:
 *         description: A filtered list of drivers
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
 *                   nationality:
 *                     type: string
 */

/**
 * @swagger
 * /drivers/statistics/{driverId}/wins:
 *   get:
 *     summary: Get the number of wins for a specific driver
 *     tags:
 *       - Driver Statistics
 *     parameters:
 *       - in: path
 *         name: driverId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the driver
 *     responses:
 *       200:
 *         description: The number of wins for the driver
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 driverId:
 *                   type: string
 *                 wins:
 *                   type: integer
 */

// Diğer rotaların Swagger dökümantasyonu da aynı şekilde hazırlanabilir.
