const express = require("express");
const router = express.Router();

const Note = require("../../models/Note");

router.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find({});
    return res.status(200).json(notes);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error." });
  }
});

router.post("/note", async (req, res) => {
  try {
    const newNote = new Note(req.body);
    await newNote.save();
    return res.status(200).json(newNote);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error." });
  }
});

router.delete("/note/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Note.findByIdAndDelete(id);
    return res.status(200).json("Note successfully deleted.");
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
