const express = require('express');
const {getAllProducts, getSingleProducts, createAProduct, updateAProduct, deleteAProduct} = require('../controllers/productConroller')

const router = express.Router()



// get all products

// router.get('/products', getAllProducts )



// get a sngle products
// router.get('/products/:id', getSingleProducts)

// create a product
// router.post("/products", createAProduct)

// router.put("/products/:id", updateAProduct)
// router.delete("/products/:id", deleteAProduct)

router.route("/products").get(getAllProducts).post(createAProduct)
router.route("/products/:id").get(getSingleProducts).put(updateAProduct).delete(deleteAProduct)

module.exports = router