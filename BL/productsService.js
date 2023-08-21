const { response } = require('express');
const productsDal = require('../DAL/productsDal.js');

// Add random quantity to data
const addRandomQuantity = async () => {
    const data = await productsDal.getData()
    data.forEach(product => {
        product["quantity"] = Math.floor((Math.random() * (100 - 1) + 1))
    });
    return data;
};

// Get all products
const getProducts = async (req, res) => {
    productsDal.findPrduct()
    return await productsDal.read();
};

// Check id func
const checkId = async (id) => {
    const data = await getProducts();
    if (await data.some(product => product.id == id)) return true;
    return false
};

// Get produdctt by id
const getProductById = async (id) => {
    const products = await getProducts();
    const product = await products.filter(product => product.id == id);
    return await product;
};

// Add product
const addProduct = async (product) => {
    await productsDal.writeToData(product);
};

// Update product
const update = async (body, id) => {
    await productsDal.update(body, id)
};

// Delete product
const deleteProduct = async (id) => {
    const data = await getProducts();
    data.splice(data.indexOf(data.find(product => product.id == id)), 1);
    productsDal.writeToData(data);
};

// add stock
const addStock = async (id) => {
    const findPrduct = await productsDal.findPrduct(id);
    findPrduct["stock"] += 1;
    await productsDal.update(findPrduct, id)
}

// download Stock
const downloadStock = async (id) => {
    const findPrduct = await productsDal.findPrduct(id);
    findPrduct["stock"] -= 1;
    await productsDal.update(findPrduct, id)
}

// Exports func
module.exports = { getProducts, getProductById, addProduct, checkId, update, deleteProduct, addStock, downloadStock, addRandomQuantity };