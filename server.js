if(process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./db");
const noteRoutes = require("./routes/api/note-routes");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json({ extended: true }));
app.use(cors());

app.use("/api", noteRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server is running at port ${PORT}...`));
