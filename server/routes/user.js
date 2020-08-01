const express = require("express");
const router = express.Router();
const { requireSignIn, isAuth, isAdmin } = require("../controllers/auth");
const {
  userById,
  getUser,
  updateUser,
  deleteUser,
  getUsers
} = require("../controllers/user");

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Retrieve and Edit User Information
 */

/**
 * @swagger
 * path:
 *  /user/{userId}:
 *    get:
 *      summary: Returns a single user corresponding to the userId.
 *      tags: [User]
 *      produces:
 *        - application/json
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *            type: string
 *      responses:
 *        400:
 *          description: Bad request.
 *        401:
 *          description: Access denied due to lack of proper authorization.
 *        404:
 *          description: User not found.
 *        200:
 *          description: Returns a user.
 *
 *    put:
 *      summary: Edits the information of a user corresponding to the userId.
 *      tags: [User]
 *      produces:
 *        - application/json
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *            type: string
 *      responses:
 *        400:
 *          description: Bad request.
 *        401:
 *          description: Access denied due to lack of proper authorization.
 *        404:
 *          description: User not found.
 *        200:
 *          description: Returns the edited user.
 *    delete:
 *      summary: Deletes a user corresponding to the userId.
 *      tags: [User]
 *      produces:
 *        - application/json
 *      consumes:
 *        - application/json
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *            type: string
 *      responses:
 *        400:
 *          description: Bad request.
 *        401:
 *          description: Access denied due to lack of proper authorization.
 *        404:
 *          description: User not found.
 *        200:
 *          description: Returns the deleted user.
 *
 *
 *  /users/{userId}:
 *    get:
 *      summary: Returns all the users. Resource available only to the administrator.
 *      tags: [User]
 *      consumes:
 *        - application/json
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        400:
 *          description: Bad request.
 *        401:
 *          description: Access denied due to lack of proper authorization.
 *        403:
 *          description: Access denied due to lack of privileges.
 *        200:
 *          description: Returns all users.
 *
 *
 */

// Called to get the current logged in user's details
router.get("/user/:userId", requireSignIn, isAuth, getUser);
// Called to update the user's information
router.put("/user/:userId", requireSignIn, isAuth, updateUser);
// Called to delete the user
router.delete("/user/:userId", requireSignIn, isAuth, deleteUser);
// Called to get the current logged in user's details
router.get("/users/:userId", requireSignIn, isAuth, isAdmin, getUsers);

// Registers the userById method to run when userId in the params
router.param("userId", userById);

module.exports = router;
