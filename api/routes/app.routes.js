const categoryController = require("../controllers/categories.controller");
const express = require("express");
const router = express.Router();

// Create a new Category
router.post("/category", categoryController.create);

// Retrieve all Categories
router.get("/category", categoryController.findAll);

// Retrieve a single Category with id
router.get("/category/:id", categoryController.findOne);

// Update a Category with id
router.put("/category/:id", categoryController.update);

// Delete a Category with id
router.delete("/category/:id", categoryController.delete);

module.exports = router;