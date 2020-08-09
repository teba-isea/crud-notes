const router = require('express').Router();

router.get('/addnote',(req,res)=>{
    res.render('partials/notes/newnote')
});

router.get('partials/notes',(req,res)=>{
    res.send('all notes')
});
module.exports = router