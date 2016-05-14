var express=require('express');
var passport=require('passport');
var router=express.Router();


router.get('/home',function(req,res){
	return res.render('home',{user:req.user});
});

router.get('/otra',function(req,res){
	// console.log("---"+req.user);
	res.render('otra',{user:req.user});
});

module.exports=router;