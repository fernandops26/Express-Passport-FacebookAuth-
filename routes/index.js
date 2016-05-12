var express=require('express');

var router=express.Router();

router.get('/',function(req,res){
	res.render('index');
});

router.get('/signup',function(req,res){
	res.render('signup');
});

//Get a login
router.get('/login',function(req,res){
	res.render('login');
});


router.get('/logout',function(req,res){
	req.logout();
	res.redirect('/login');
});
module.exports=router;