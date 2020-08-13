const router = require("express").Router();
const Note = require("../models/note");

router.get("/add", (req, res) => {
  res.render("addnote");
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
    req.flash('success_msg', 'Note added successfully')
    res.redirect("/notes");
  }
});

router.get("/edit/:id", async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  res.render("editnote", { note });
});

router.put("/edit/:id", async (req, res) => {
  const { title, content } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, content });
  req.flash('success_msg', 'Note edited successfully')
  res.redirect("/notes");
});

router.get("/notes", async (req, res) => {
  const notes = await Note.find().lean().sort({ date: "desc" });
  res.render("allnotes", { notes });
});

router.delete("/delete/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  req.flash('success_msg', 'Note deleted successfully')
  res.redirect('/notes')
});

module.exports = router;
