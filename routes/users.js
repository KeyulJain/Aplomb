var express = require('express');
var router = express.Router();
const User = require('../Models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',async function(req,res){
  console.log(req.body);
  const user = await  User.findOne({
    username: req.body.username,

  });
  if(user!=undefined) {
    const message = encodeURIComponent('Username already exists'); 
    res.redirect(`/signuppage?message=${message}`);
    return;    
  }
  if(req.body.username==''){
    const message = encodeURIComponent('Username must be defined'); 
    res.redirect(`/signuppage?message=${message}`);
    return; 
  }
  if(req.body.password==''){
    const message = encodeURIComponent('password must be defined'); 
    res.redirect(`/signuppage?message=${message}`);
    return; 
  }
  if(req.body.lastname==''){
    const message = encodeURIComponent('lastname must be defined'); 
    res.redirect(`/signuppage?message=${message}`);
    return; 
  }
  if(req.body.firstname==''){
    const message = encodeURIComponent('firstname must be defined'); 
    res.redirect(`/signuppage?message=${message}`);
    return; 
  }
  await User.create({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,

  });

  

  const message = encodeURIComponent('Sign Up Successful'); 
  res.redirect(`/loginpage?message=${message}`);


});

router.post('/login', async function(req,res){
  if(req.body.username==''){
    const message = encodeURIComponent('Username must be defined'); 
    res.redirect(`/loginpage?message=${message}`);
    return; 
  }
  if(req.body.password==''){
    const message = encodeURIComponent('password must be defined'); 
    res.redirect(`/loginpage?message=${message}`);
    return; 
  }
  
  const user = await  User.findOne({
    username: req.body.username,

  });
  if(user==undefined) {
    const message = encodeURIComponent("Username doesn't exists"); 
    res.redirect(`/loginpage?message=${message}`);
    return;    
  }
  if(req.body.password!=user.password) {
    const message = encodeURIComponent("Password doesn't match"); 
    res.redirect(`/loginpage?message=${message}`);
    return;    
  }
  req.session.user=user;
  res.redirect('/');
});


module.exports = router;


