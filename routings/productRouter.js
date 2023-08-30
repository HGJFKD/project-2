const express = require('express');
const productsController = require('../Controllers/productsController.js');
const router = express.Router();


// Get all users
router.get('/products', productsController.getAllProducts);

// Get product by id
router.get('/:id', productsController.getProductById);

// Add product
router.post('/addProduct', productsController.addProduct);

// Update product
router.put('/update', productsController.update);

// Add to stoke 
router.put('/upQuantity/:id', productsController.addStock);

// Download quantity
router.put('/downQuantity/:id', productsController.downloadStock);

// Delete product
router.delete('/:id', productsController.deleteProduct);

module.exports = router;