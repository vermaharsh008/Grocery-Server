const express = require("express");
const router = express.Router();
const { requireSignIn, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const {
  getInventories,
  getInventory,
  deleteItem,
  inventoryByUserId,
  addItem,
  itemId,
} = require("../controllers/inventory");

/**
 * @swagger
 * tags:
 *   name: Inventory
 *   description: Retrieve Inventory
 */

/**
 * @swagger
 * path:
 *  /inventory/{userId}:
 *    get:
 *      summary: Returns a single inventory corresponding to the userId.
 *      tags: [Inventory]
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
 *          description: Inventory not found.
 *        200:
 *          description: Returns an inventory.
 *
 *  /inventories/{userId}:
 *    get:
 *      summary: Returns all the inventories. Resource available only to the administrator.
 *      tags: [Inventory]
 *      produces:
 *        - application/json
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
 *          description: Returns all inventories.
 *
 *  /inventory/addItem/{userId}:
 *    post:
 *      summary: adds a new item to the inventory of the user. Require only name of the item that already exits in the item table.
 *      tags: [Inventory]
 *      produces:
 *        - application/json
 *      consumes:
 *        - application/json
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Item'
 *      responses:
 *        400:
 *          description: Bad request.
 *        401:
 *          description: Access denied due to lack of proper authorization.
 *        200:
 *          description: Returns an items.
 *
 *  /inventory/deleteItem/{userId}/{itemId}:
 *    delete:
 *      summary: Deletes a item corresponding to the itemId in the inventory.
 *      tags: [Inventory]
 *      produces:
 *        - application/json
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *            type: string
 *        - in: path
 *          name: itemId
 *          schema:
 *            type: string
 *      responses:
 *        400:
 *          description: Bad request.
 *        401:
 *          description: Access denied due to lack of proper authorization.
 *        200:
 *          description: Returns the deleted item.
 *
 */

router.get("/inventory/:userId", requireSignIn, isAuth, getInventory);
router.get(
  "/inventories/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  getInventories
);
router.post("/inventory/addItem/:userId", requireSignIn, isAuth, addItem);
router.delete(
  "/inventory/deleteItem/:userId/:itemId",
  requireSignIn,
  isAuth,
  deleteItem
);

// Registers the inventoryByUserId method to run when userId in the params
router.param("userId", inventoryByUserId);
router.param("userId", userById);
router.param("itemId", itemId);

module.exports = router;
