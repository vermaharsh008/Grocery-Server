const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * @swagger
 *  components:
 *    schemas:
 *      Item:
 *        type: object
 *        required:
 *          - name
 *          - unit_price
 *          - category
 *          - unit_type
 *        properties:
 *          name:
 *            type: string
 *          unit_price:
 *            type: number
 *            format: float
 *          unit_type:
 *            type: string
 *            description: Measurement units for the item.
 *            enum:
 *            - l
 *            - kg
 *            - unit
 *          category:
 *            type: string
 *            description: An item can belong to the following categories.
 *            enum:
 *            - Grocery
 *            - Frozen
 *            - Meats
 *            - Dairy
 *            - Produce
 *            - Bakery
 *            - Drinks
 *            - Snacks
 *        example:
 *           name: Apple
 *           unit_type: kg
 *           unit_price: 2.99
 *           category: Produce
 */
const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxLength: 50,
      unique: true
    },
    unit_price: {
      type: Number,
      required: true,
      min: 0
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Grocery",
        "Frozen",
        "Meats",
        "Dairy",
        "Produce",
        "Bakery",
        "Drinks",
        "Snacks"
      ]
    },
    unit_type: {
      type: String,
      required: true,
      enum: ["l", "kg", "unit"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", ItemSchema);
