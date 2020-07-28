const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('erro_msg','Sign in First')
  res.redirect('/signin')
};

module.exports = helpers