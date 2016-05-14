var express=require('express');

var router=express.Router();

//GET  a la raiz principal
router.get('/',function(req,res){
	res.render('index');
});

//Get a SIgnup
router.get('/signup',function(req,res){
	res.render('signup',{signupMsj:req.flash('signupMsj')});
});

//Get a login
router.get('/login',function(req,res){
	res.render('login',{loginMsj:req.flash('loginMsj')});
});


router.get('/logout',function(req,res){
	req.logout();
	res.redirect('/login');
});
module.exports=router;