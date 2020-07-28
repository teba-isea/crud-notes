const router = require("express").Router();
const User = require("../models/user");
const passport = require("passport");

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.post(
  "/signin",
  passport.authenticate("local", {
    successRedirect: "/notes",
    failureRedirect: "/signin",
    failureFlash: true,
  }),
);

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  const errors = [];
  const emailUser = await User.findOne({ email: email });

  if (emailUser) {
    errors.push({ text: "you already have a account." });
  }
  if (name.length == 0) {
    errors.push({ text: "Please complete all the fields" });
  }
  if (password != confirmPassword) {
    errors.push({ text: "Password do not math" });
  }
  if (password.length < 8) {
    errors.push({ text: "Password is too little,min 8" });
  }
  if (errors.length > 0) {
    res.render("signup", { errors, name, email, password, confirmPassword });
  } else {
    const newUser = new User({ name, email, password });
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    req.flash("succes_msg", "your account has been created");
    res.redirect("/signin");
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
