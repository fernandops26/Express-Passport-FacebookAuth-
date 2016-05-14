var express=require('express');

var router=express.Router();

//Rutas publicass(asuario no autenticado)


router.get('/',function(req,res){
	res.render('index');
});


router.get('/signup',function(req,res){
	res.render('signup',{signupMsj:req.flash('signupMsj')});
});


router.get('/login',function(req,res){
	res.render('login',{loginMsj:req.flash('loginMsj')});
});

router.get('/logout',function(req,res){
	req.logout();
	res.redirect('/login');
});
module.exports=router;