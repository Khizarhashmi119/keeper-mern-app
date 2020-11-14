if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
const express = require("express");
const path = require("path");

const connectDB = require("./db");
const noteRoutes = require("./routes/api/note-routes");

const app = express();

//* Database connect
connectDB();

//* Middlewares
app.use(express.json({ extended: true }));
if (process.env.NODE_ENV === "development") {
  app.use(require("morgan")("dev"));
}
//* API routes
app.use("/api", noteRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode at port ${process.env.PORT}`
  )
);
