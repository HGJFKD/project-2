const productsService = require('../BL/productsService.js');

// Get data
const getData = async () => {
    return await productsService.addRandomQuantity()
};

// Get all products
const getAllProducts = async (req, res) => {
    const products = await productsService.getProducts();
    await res.send(products);
};

// Get product by id
const getProductById = async (req, res) => {
    if (! await productsService.checkId(req.params.id)) {
        res.send("We did not find a product with such a id")
    };
    const product = await productsService.getProductById(req.params.id);
    await res.send(product);
};

// Add product
const addProduct = async (req, res) => {
    if (productsService.checkId(req.body.id)) {
        res.send("There is already a product with such a id");
    };
    const newProduct = req.body;
    await productsService.addProduct(newProduct);
    res.send("The product has been successfully added");
};

// Update prodact func
const update = async (req, res) => {
    if (await !productsService.checkId(req.body.id)) {
        res.send("We did not find a product with such a id");
    };
    try {
        await productsService.update(req.body, req.body.id);
        res.send("The product has been updated successfully");
    } catch (err) {
        res.send(new Error(err));
    }

};

const deleteProduct = async (req, res) => {
    if (!productsService.checkId(req.params.id)) {
        console.log(await productsService.checkId(req.params.id));
        res.send("We did not find a product with such a id");
    };
    try {
        await productsService.deleteProduct(req.params.id);
        res.send("The product has been successfully deleted");
    } catch (err) {
        res.send(new Error(err));
    }

};

// 
const addStock = async (req, res) => {
    if (!productsService.checkId(req.params.id)) {
        console.log(await productsService.checkId(req.params.id));
        res.send("We did not find a product with such a id");
    };
    await productsService.addStock(req.params.id);
    res.send("The product quantity has been successfully added");
};

// download Stock
const downloadStock = async (req, res) => {
    if (!productsService.checkId(req.params.id)) {
        console.log(await productsService.checkId(req.params.id));
        res.send("We did not find a product with such a id");
    };
    await productsService.downloadStock(req.params.id);
    res.send("The product quantity has been downloaded successfully");
};


// Exports func
module.exports = { getAllProducts, getProductById, addProduct, update, deleteProduct, addStock, downloadStock, getData };