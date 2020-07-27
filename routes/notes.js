const router = require("express").Router();
const Note = require("../models/note");

router.get("/add", (req, res) => {
  res.render("partials/notes/addnote");
});

router.post("/add", async (req, res) => {
  const { title, content } = req.body;
  const errors = [];
  if (!title) {
    errors.push({ text: "please write a title" });
  }
  if (!content) {
    errors.push({ text: "please wite a content" });
  }
  if (errors.length > 0) {
    res.redirect("/addnote", {
      errors,
      title,
      content,
    });
  } else {
    const newNote = new Note({ title, content });
    await newNote.save();
    res.redirect("/notes");
  }
});

router.get("/edit/:id", async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  res.render("partials/notes/editnote", { note });
});

router.put("/edit/:id", async (req, res) => {
  const { title, content } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, content });
  res.redirect("/notes");
});

router.get("/notes", async (req, res) => {
  const notes = await Note.find().lean().sort({ date: "desc" });
  res.render("partials/notes/allnotes", { notes });
});

module.exports = router;
