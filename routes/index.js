var express = require('express');
var router = express.Router();
const User = require('../Models/user')

/* GET home page. */
router.get(express.static('/public'));
router.get('/', function(req, res, next) {
  if(req.session.user == undefined){
    res.redirect('/index');
    return;
  }

  res.render('index', { user: req.session.user });
});

router.get(express.static('/public'));
router.get('/signuppage', function(req, res, next) {
  const message = req.query.message;
  res.render('signup',{message: message});
});

router.get(express.static('/public'));
router.get('/loginpage', function(req, res, next) {
  const message = req.query.message;
  res.render('login',{message: message});
  
});
router.get(express.static('/public'));
router.get('/meditation',function(req,res,next){
  res.render('meditation');
})
router.get(express.static('/public'));
router.get('/journalling',function(req,res,next){
  res.render('journalling');
})

router.get(express.static('/public'));
router.get('/journallinglist',async function(req,res,next){
  const user = await User.findById(req.session.user._id).populate('notes').exec();
  console.log(user.notes)
  const context = {notes: user.notes.map(note =>{
    return {
      content: note.content,
      createdAt: note.createdAt.toString().split('GMT')[0]
    }
  })}
  console.log(context);
  res.render('journallinglist',context);
})




router.get('/cbt',function(req,res,next){
  res.render('cbt');
})
router.get('/cbt-page1',function(req,res,next){
  res.render('cbt-page1');
})
router.get('/cbt-page2',function(req,res,next){
  res.render('cbt-page2');
})
router.get('/cbt-page3',function(req,res,next){
  res.render('cbt-page3');
})
router.get('/cbt-page4',function(req,res,next){
  res.render('cbt-page4');
})

router.get('/cbt-page5',function(req,res,next){
  res.render('cbt-page5');
})
router.get('/cbt-page6',function(req,res,next){
  res.render('cbt-page6');
})
router.get('/cbt-page7',function(req,res,next){
  res.render('cbt-page7');
})

module.exports = router;
