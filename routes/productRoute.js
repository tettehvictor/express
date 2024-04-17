const express = require('express');

const router = express.Router()



// get all products

router.get('/products', (req, res) => {
    res.status(200)
    res.json([
        {
            productName: 'iphone 15',
            productPrice: '$1300'
        },
        {
            productName: 'iphone 14',
            productPrice: '$1200'
        },
        {
            productName: 'iphone 13',
            productPrice: '$1100'
        }
    ])
})



// get a sngle products
router.get('/products/:id', (req, res) => {
    res.status(200)
    res.json({
        productName: "iphone 11",
        productPrice: "$1300"
    })
})

// create a product
router.post("/products", (req, res) => {
    res.status(200)
    res.json({
        message: 'product added successfully'
    })
})

router.put("/products/:id", (req, res) => {
    res.status(200)
    res.json({
        message: 'product updated successfully'
    })
})
router.delete("/products/:id", (req, res) => {
    res.status(200)
    res.json({
        message: 'product deleted successfully'
    })
})

module.exports = router