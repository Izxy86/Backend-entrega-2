const express = require('express');
const ProductManager = require('../Managers/ProductManager');

const router = express.Router();
const productManager = new ProductManager('src/data/products.json');

router.get('/realtimeproducts', async (req, res) => {
    const products = await productManager.getProducts();
    res.render('realTimeProducts', { title: 'Productos en Tiempo Real', products });
});

router.get('/', async (req, res) => {
    const products = await productManager.getProducts();
    res.render('home', { title: 'Listado de Productos', products });
});

module.exports = router;
