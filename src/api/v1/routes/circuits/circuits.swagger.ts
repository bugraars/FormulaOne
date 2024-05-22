/**
 * @swagger
 * /statistics/circuit:
 *   get:
 *     summary: Get circuit statistics
 *     tags:
 *       - Circuits
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns statistics for circuits.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalCircuits:
 *                   type: integer
 *                   description: The total number of circuits.
 *                 averageLaps:
 *                   type: number
 *                   format: float
 *                   description: The average number of laps per circuit.
 *       401:
 *         description: Unauthorized - User not authenticated.
 */
