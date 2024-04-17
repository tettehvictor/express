exports.getAllProducts = (req, res) => {
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
}

exports.getSingleProducts = (req, res) => {
    res.status(200)
    res.json({
    productName: "iphone 11",
    productPrice: "$1300"   })
}

exports.createAProduct =  (req, res) => {
    res.status(200)
    res.json({
        message: 'product added successfully'
    })
}
exports.updateAProduct = (req, res) => {
    res.status(200)
    res.json({
        message: 'product updated successfully'
    })
}
exports.deleteAProduct = (req, res) => {
    res.status(200)
    res.json({
        message: 'product deleted successfully'
    })
}