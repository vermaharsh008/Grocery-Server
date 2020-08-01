const Inventory = require("../models/inventory");
const Item = require("../models/item");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.itemId = (req, res, next, id) => {
  req.item_id = id;
  next();
};

createInventory = (req, res, id) => {
  items = [];
  const inventory = new Inventory({ user: id, items });
  inventory.save((err, invent) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    return res.status(201).json(invent);
  });
};

// Runs every time there is userID in the params of a URL
exports.inventoryByUserId = (req, res, next, id) => {
  Inventory.findOne({ user: id }, (err, inventory) => {
    if (err) {
      return res.status(400).json({ error: "Inventory does not exist." });
    }
    if (!inventory) {
      createInventory(req, res, id);
    } else {
      req.inventory = inventory;
      next();
    }
  });
};

exports.getInventory = async (req, res) => {
  let inventory = JSON.parse(JSON.stringify(req.inventory));
  let items = [...inventory.items];
  let new_items = [];
  for (let item of items) {
    await Item.findOne({ _id: item.item_id }, (err, found) => {
      const new_item = new Object();
      const { active, _id, item_id } = item;
      const name = found.name;
      new_item.active = active;
      new_item._id = _id;
      new_item.item_id = item_id;
      new_item.name = name;
      new_items.push(new_item);
    });
  }
  inventory.items = new_items;
  return res.status(200).json(inventory);
};

exports.getInventories = (req, res) => {
  Inventory.find({}, (err, inventories) => {
    if (err) {
      return res.status(400).json({ error: "Inventory does not exist." });
    }
    return res.status(200).json(inventories);
  });
};

exports.addItem = (req, res) => {
  let inventory = req.inventory;
  const name = req.body.name;
  Item.findOne({ name }, (err, item) => {
    if (err || !item) {
      return res.status(400).json({ error: "Item does not exist." });
    }
    let items = [{ item_id: item._id }, ...inventory.items];
    inventory.items = items;
    inventory.save((err, invent) => {
      if (err) {
        return res.status(400).json({ error: errorHandler(err) });
      }
      return res.status(200).json(invent);
    });
  });
};

exports.deleteItem = (req, res) => {
  user = req.profile._id;
  item_id = req.item_id;
  inventory = req.inventory;
  items = [...inventory.items];
  for (let item of items) {
    if (item._id == item_id) {
      items.splice(items.indexOf(item), 1);
    }
  }
  inventory.items = items;
  inventory.save((err, invent) => {
    if (err) {
      return res.status(400).json({ error: "Error" });
    }
    return res.status(200).json(invent);
  });
};
