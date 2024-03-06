const express = require("express");

const router = express.Router();

const wishlistController = require("../controller/wishlistController")

router.get("/allWishlist", wishlistController.getAllWishlist)
router.get("/:productId", wishlistController.getWishlist)
router.post("/add", wishlistController.addWishlist)
router.delete("/delete/:productId", wishlistController.deleteWishlist)


module.exports = router;
