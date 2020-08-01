const express = require("express");
const router = express.Router();
const { requireSignIn, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const {
  addItem,
  getItems,
  updateItem,
  deleteItem,
  itemById,
  getItem
} = require("../controllers/item");

/**
 * @swagger
 * tags:
 *   name: Item
 *   description: Retrieve and Edit Item Information
 */

/**
 * @swagger
 * path:
 *  /item/{itemId}/{userId}:
 *    put:
 *      summary: Edits the information of an item corresponding to the itemId. Resource available only to the administrator.
 *      tags: [Item]
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
 *              $ref: '#/components/schemas/User'
 *      parameters:
 *        - in: path
 *          name: itemId
 *          schema:
 *            type: string
 *      responses:
 *        400:
 *          description: Bad request.
 *        401:
 *          description: Access denied due to lack of proper authorization.
 *        404:
 *          description: Item not found.
 *        200:
 *          description: Returns the edited item.
 *    delete:
 *      summary: Deletes a item corresponding to the itemId. Resource available only to the administrator.
 *      tags: [Item]
 *      produces:
 *        - application/json
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: itemId
 *          schema:
 *            type: string
 *      responses:
 *        400:
 *          description: Bad request.
 *        401:
 *          description: Access denied due to lack of proper authorization.
 *        404:
 *          description: Item not found.
 *        200:
 *          description: Returns the deleted item.
 *
 *  /items/{userId}:
 *    get:
 *      summary: Returns all the items. Resource available only to the administrator.
 *      tags: [Item]
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
 *          description: Returns all items.
 *  /item/{userId}:
 *    post:
 *      summary: Creates a new item. Resource available only to the administrator.
 *      tags: [Item]
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
 *        403:
 *          description: Access denied due to lack of privileges.
 *        200:
 *          description: Returns an items.
 *
 */

router.post("/item/:userId", requireSignIn, isAuth, isAdmin, addItem);
router.get("/items/:userId", requireSignIn, isAuth, isAdmin, getItems);
router.get("/item/:userId/:itemId", requireSignIn, isAuth, getItem);
router.put("/item/:userId/:itemId", requireSignIn, isAuth, isAdmin, updateItem);
router.delete(
  "/item/:itemId/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  deleteItem
);

router.param("userId", userById);
router.param("itemId", itemById);
module.exports = router;
