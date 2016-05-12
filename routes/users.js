var express=require('express');
var passport=require('passport');
var router=express.Router();




//Get a signup

/**
 * 	Get a autenticacion con facebook
 * 	Passport se encarga de la autenticacion
 */



router.get('/home',function(req,res){
	res.render('home',{user:req.user});
});

router.get('/otra',function(req,res){
	// console.log("---"+req.user);
	res.render('otra',{user:req.user});
});

module.exports=router;