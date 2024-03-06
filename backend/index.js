require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

const userProfileRoute = require("./routes/userProfileRoute")
const wishlistRoute = require("./routes/wishlistRoute");
const productRoute = require("./routes/productRoute");
const authenticateUser = require('./middleware/authenticateUser');
const { default: mongoose } = require('mongoose');
const cookieParser = require("cookie-parser");

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(
    cors({
        origin: [process.env.CLIENT_URL],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true,
    })
);



//Database Connection
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});


app.use("/api/v1/user", userProfileRoute)
app.use("/api/v1/wishlist", authenticateUser, wishlistRoute)
app.use("/api/v1/product", authenticateUser, productRoute)

app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is Healthy ,up and running" })
})

app.listen(process.env.PORT, () => {
    console.log(`server started at port ${process.env.PORT} `);
})