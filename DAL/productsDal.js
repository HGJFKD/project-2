const products = require('../products.json');
const jsonfile = require('jsonfile');
const axios = require('axios');
const { response } = require('express');

// get data
const getData = () => {
    const data = axios.get('https://fakestoreapi.com/products')
    return data.then(response => response.data)
};

// Get all products
const read = (req, res) => {
    return jsonfile.readFile('./products.json');
};


// Add product
const writeToData = (data, ...product) => {
    read()
        .then(products => jsonfile.writeFile('./products.json', [...data, product], (err) => {
            if (err) throw err;
        }));
};

// Update product
const update = (body, id) => {
    read().then(products => {
        products.forEach((product, i) => {
            if (product.id == id) {
                products[i] = body;
                writeToData(products);
            };
        });
    });
};

// Find product by id
const findPrduct = async (id) => {
    const data = await read();
    const findPrduct = await data.find(product => product.id == id)
    return findPrduct;
}

// Exports func
module.exports = { read, writeToData, update, findPrduct, getData };