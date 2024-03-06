const Product = require("../model/product.model");


const getProducts = async (req, res) => {
    const page = parseInt(req.params.pageNumber);

    try {
        const skip = (page - 1) * 10;

        const products = await Product.find().skip(skip).limit(10);
        const totalResults = await Product.countDocuments()
        res.status(200).json({ products, totalResults });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    getProducts
}