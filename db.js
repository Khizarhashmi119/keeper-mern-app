const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const {
      connection: { host, port },
    } = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`MongoDB is connected at ${host}:${port}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
