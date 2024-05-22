/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: 
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: The user was successfully registered
 */
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Log in a user
 *     tags: 
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: The user was successfully logged in
 */
/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Log out a user
 *     tags: 
 *       - Auth
 *     responses:
 *       200:
 *         description: The user was successfully logged out
 */
