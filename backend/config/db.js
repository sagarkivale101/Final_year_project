require("dotenv").config();
const mongoose = require("mongoose");
const url = "mongodb+srv://user-123:user-123@mini-mern.fc979.mongodb.net/shop?retryWrites=true&w=majority"

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
