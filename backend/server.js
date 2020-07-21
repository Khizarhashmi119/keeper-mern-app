const express = require("express");
const cors = require("cors");

const connectDB = require("./db");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json({ extended: true }));
app.use(cors());

app.use("/api", require("./routes/api/note"));

app.listen(PORT, () => console.log(`Server is running at port ${PORT}...`));
