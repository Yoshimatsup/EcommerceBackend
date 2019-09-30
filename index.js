const products = require('./modules/home.component.js');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(products);
});

app.get('/api/products/:id', (req, res) => {
    const requiredP = products.find(p => p.id === parseInt(req.params.id));
    if (!requiredP) res.status(404);
    res.send(requiredP);
});

app.listen(3000, () => console.log('Listening on port 3000...'));