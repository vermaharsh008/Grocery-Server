const Item = require("../models/item");
const { errorHandler } = require("../helpers/dbErrorHandler");

// Runs every time there is :itemId param in the url
exports.itemById = (req, res, next, id) => {
  Item.findById(id).exec((err, item) => {
    if (err || !item) {
      return res.status(404).json({
        error: "Item not found",
      });
    }
    req.item = item;
    next();
  });
};

exports.getItem = (req, res) => {
  // It runs the itemById method by default and the
  // item is populated into the request.
  return res.json(req.item);
};

exports.addItem = (req, res) => {
  const { name, unit_price, unit_type } = req.body;
  if (!name) {
    return res.status(400).json({
      error: "Name is required",
    });
  }
  const item = new Item(req.body);
  item.save((err, item) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    return res.status(201).json(item);
  });
};

exports.deleteItem = (req, res) => {
  let item = req.item;
  Item.deleteOne(item, (err, deletedItem) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    return res.status(200).json({
      deletedItem,
      msg: "Item Deleted",
    });
  });
};

exports.getItems = (req, res) => {
  Item.find({}, (err, items) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    return res.status(200).json(items);
  });
};

exports.updateItem = (req, res) => {
  Item.findOneAndUpdate(
    { _id: req.item._id },
    { $set: req.body },
    { new: true },
    (err, item) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(item);
    }
  );
};
