const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;

/**
 * @swagger
 *  components:
 *    schemas:
 *      Inventory:
 *        type: object
 *        required:
 *          - user
 *        properties:
 *          user:
 *            $ref: '#/components/schemas/User'
 *          items:
 *            type: array
 *            xml:
 *              name: item
 *              wrapped: true
 *            items:
 *              $ref: '#/components/schemas/Item'
 */
const InventorySchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
      unique: true
    },
    items: [
      {
        item_id: {
          type: ObjectId,
          ref: "Item",
          required: true
        },
        active: {
          type: Boolean,
          default: true
        },
        last_update: Date
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", InventorySchema);
