const router = require('express').Router();

router.get('/', (req,res)=>{
    res.render('partials/index')
});

router.get('/about', (req,res)=>{
    res.render('partials/about')
});

module.exports = router