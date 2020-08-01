const express = require("express");
const router = express.Router();
const {
  userValidationRules,
  validate
} = require("../validation/userValidator"); // Validator rules for email, password and name

const { register, login } = require("../controllers/auth");

/**
 * @swagger
 * tags:
 *   name: Authorization
 *   description: User Login and Registration
 */

/**
 * @swagger
 * path:
 *  /register:
 *    post:
 *      summary: Creates a new user.
 *      tags: [Authorization]
 *      produces:
 *        - application/json
 *      consumes:
 *        - application/json
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        400:
 *          description: Bad request.
 *        201:
 *          description: A user schema with authorization token.
 *          content:
 *            application/json:
 *              token:
 *                type: string
 *                description: Authorization Token (JWT)
 *              schema:
 *                $ref: '#/components/schemas/User'
 *              example:
 *                token: 2345refgdfcyu564hgfy564yfgh56yurth546
 *                user:
 *                 name: Alexander
 *                 email: alexander@email.com
 *
 *  /login:
 *    post:
 *      summary: Logs in an existing user
 *      tags: [Authorization]
 *      produces:
 *        - application/json
 *      consumes:
 *        - application/json
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *            example:
 *              email: alexander@email.com
 *              password: password
 *      responses:
 *        404:
 *          description: User does not exist.
 *        401:
 *          description: Password does not match.
 *        default:
 *          description: A user schema with authorization token.
 *          content:
 *            application/json:
 *              token:
 *                type: string
 *                description: Authorization Token (JWT)
 *              schema:
 *                $ref: '#/components/schemas/User'
 *              example:
 *                token: 2345refgdfcyu564hgfy564yfgh56yurth546
 *                user:
 *                 name: Alexander
 *                 email: alexander@email.com
 *
 */
router.post("/register", userValidationRules(true), validate, register);
router.post("/login", userValidationRules(false), validate, login);

module.exports = router;
