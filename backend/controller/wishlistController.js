const User = require("../model/user.model");
const Product = require("../model/product.model")

const addWishlist = async (req, res) => {
    const productId = req.body.productId
    const user = req.user
    try {
        await User.findByIdAndUpdate(user._id, { $push: { wishlist: productId } });

        res.status(201).json({ message: 'Product added to wishlist successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

const deleteWishlist = async (req, res) => {
    const productId = req.params.productId;
    const user = req.user;

    try {
        const updatedUser = await User.findByIdAndUpdate(user._id, { $pull: { wishlist: productId } }, { new: true });

        res.status(200).json(updatedUser)
    } catch (error) {
        console.log(error);
        res.status(200).json({ message: "There is some error" })
    }
}

const getAllWishlist = async (req, res) => {
    const user = req.user

    try {
        const populatedUser = await user.wishlist.populate("wishlist")

        res.status(200).json(populatedUser)
    } catch (error) {
        console.log(error);
        res.status(200).json({ message: "Error getting wishlists", error })
    }
}

const getWishlist = async (req, res) => {
    const productId = req.params.productId;
    try {
        const item = await Product.findById(productId)
        res.status(200).json(item)
    } catch (error) {
        console.log(error);
        res.status(200).json({ message: "There is some error" })
    }
}

module.exports = {
    addWishlist,
    deleteWishlist,
    getAllWishlist,
    getWishlist
}