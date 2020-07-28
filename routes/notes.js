const router = require('express').Router();
router.get('/notes',(req,res)=>{
    res.send('all notes')
});
module.exports = router