const router = require('express').Router();

router.get('/signin', (req,res)=>{
    res.render('partials/users/signin');
});

router.get('/signup', (req,res)=>{
    res.render('partials/users/signup')
});

module.exports = router