var express = require('express');
var router = express.Router();
const Note = require('../Models/note');
const User = require('../Models/user');

router.post('/',async (req,res)=>{
    const note = await Note.create({content: req.body.content});
    //const user= req.session.user
    const user = await User.findById(req.session.user._id).populate('notes').exec()
    //Note.findOne().populate().exec()
    //await user.populate('notes').exec()
    user.notes.push(note)
    await user.save()
    console.log(user)
    res.redirect('/journallinglist')
})
router.get('/',async (req,res)=>{
    res.send('Hello World')
})


module.exports = router;
