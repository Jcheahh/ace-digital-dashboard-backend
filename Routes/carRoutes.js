const express = require("express");
const carController = require("../Controllers/carController");
const { filter, cars } = carController;

const router = express.Router();

router.get("/", cars);

router.get("/filter", filter);

module.exports = router;
