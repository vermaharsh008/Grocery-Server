const Inventory = require("../models/inventory");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.addReceipt = (req, res) => {
  user = req.profile._id;
  let items = req.body.items;
  for (let item of items) {
    if (!item.last_update) item.last_update = new Date();
  }
  Inventory.findOne({ user }, (err, inventory) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    if (!inventory) {
      const inventory_new = new Inventory({ user, items });
      inventory_new.save((err, invent) => {
        if (err) {
          return res.status(400).json({ error: errorHandler(err) });
        }
        return res.status(200).json(invent);
      });
    } else {
      items = [...items, ...inventory.items];
      inventory.items = items;
      inventory.save((err, invent) => {
        if (err) {
          return res.status(400).json({ error: errorHandler(err) });
        }
        return res.status(200).json(invent);
      });
    }
  });
};
