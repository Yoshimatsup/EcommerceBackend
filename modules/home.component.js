const express = require('express');
const app = express();
var fs = require('fs');

function base64_encode(file) {


    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

module.exports = [
    { id: 1, category: 'glasses', price: 14.00, img: base64_encode('files/optimized-glasses.jpg') },
    { id: 2, category: 'hoodies', price: 80.00, img: base64_encode('files/optimized-hoodie.jpg') },
    { id: 3, category: 't-shirts', price: 30.00, img: base64_encode('files/optimized-shirt.jpg') },
    { id: 4, category: 'shoes', price: 50.00, img: base64_encode('files/optimized-shoes.jpg') },
    { id: 5, category: 'shorts', price: 30.00, img: base64_encode('files/optimized-shorts.jpg') },
    { id: 6, category: 'lifestyle', price: 2000, img: base64_encode('files/optimized-lifestyle.jpg') }
]
