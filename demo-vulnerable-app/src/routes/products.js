const express = require('express');
const router = express.Router();

const products = [
    { id: 1, name: 'Widget A', price: 9.99 },
    { id: 2, name: 'Widget B', price: 19.99 },
    { id: 3, name: 'Widget C', price: 29.99 },
];

router.get('/', (req, res) => {
    res.json({ products });
});

router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: 'Not found' });
    res.json(product);
});

module.exports = router;
