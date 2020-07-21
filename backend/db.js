const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/keeperAppDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB is connected...");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
