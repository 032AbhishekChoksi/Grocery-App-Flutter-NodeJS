const categoryController = require("../controllers/categories.controller");
const productsController = require("../controllers/products.controller");
const usersController = require("../controllers/users.controller");
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

// Create a new Product
router.post("/product", productsController.create);

// Retrieve all Products
router.get("/product", productsController.findAll);

// Retrieve a single Product with id
router.get("/product/:id", productsController.findOne);

// Update a Product with id
router.put("/product/:id", productsController.update);

// Delete a Product with id
router.delete("/product/:id", productsController.delete);

// Register User
router.post("/register", usersController.register);

// Login User
router.post("/login", usersController.login);

module.exports = router;