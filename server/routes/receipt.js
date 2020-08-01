const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");
const { addReceipt } = require("../controllers/receipt");
const { requireSignIn, isAuth, isStore } = require("../controllers/auth");

// The Grocery calls this link to submit the receipt associated with the user
router.post("/receipt/:userId", requireSignIn, isAuth, isStore, addReceipt);

// Registers the userById method to run when userId in the params
router.param("userId", userById);

module.exports = router;
