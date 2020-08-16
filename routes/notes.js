const router = require("express").Router();
const Note = require("../models/note");
const {isAuthenticated} = require('../helpers/auth')

router.get("/add",isAuthenticated, (req, res) => {
  res.render("addnote");
});

router.post("/add",isAuthenticated, async (req, res) => {
  const { title, content } = req.body;
  const errors = [];
  if (!title) {
    errors.push({ text: "please write a title" });
  }
  if (!content) {
    errors.push({ text: "please write some content" });
  }
  if (errors.length > 0) {
    res.redirect("/addnote", {
      errors,
      title,
      content,
    });
  } else {
    const newNote = new Note({ title, content });
    newNote.user = req.user.id
    await newNote.save();
    req.flash('success_msg', 'Note added successfully')
    res.redirect("/notes");
  }
});

router.get("/edit/:id",isAuthenticated, async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  res.render("editnote", { note });
});

router.put("/edit/:id",isAuthenticated, async (req, res) => {
  const { title, content } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, content });
  req.flash('success_msg', 'Note edited successfully')
  res.redirect("/notes");
});

router.get("/notes",isAuthenticated, async (req, res) => {
  const notes = await Note.find({user: req.user.id}).lean().sort({ date: "desc" });
  res.render("allnotes", { notes });
});

router.delete("/delete/:id",isAuthenticated, async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  req.flash('success_msg', 'Note deleted successfully')
  res.redirect('/notes')
});

module.exports = router;
