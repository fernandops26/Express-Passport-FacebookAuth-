var express=require('express');
var passport=require('../config/passport');
var router=express.Router();


//Get a signup
router.get('/signup',function(req,res){
	res.render('signup');
});

//Get a login
router.get('/login',function(req,res){
	res.render('login');
});

/**
 * 	Get a autenticacion con facebook
 * 	Passport se encarga de la autenticacion
 */
router.get('/auth/facebook',passport.authenticate('facebook'));

/**
 * Get a el callback que se encarga
 * de redireccionar a
 * una pagina que requiera autorizacion si se logeo correctamente,
 * o una pagina para intentar otra vez el login si ocurrio un error
 */
router.get('/auth/facebook/callback',
	passport.authenticate('facebook', 
	{ failureRedirect: '/login' }),
	  function(req, res) {
	    // Successful authentication, redirect home.
	    res.redirect('/');
	  });

/**
 * Get a autenticacion con twitter
 */
router.get('/auth/twitter',function(req,res){

});

/**
 * Get a autenticacion local
 */
router.post('/auth/local',function(req,res){
	var objUser={
		email:req.body.email,
		pass:req.body.pass
	};

	console.log(objUser);
});


module.exports=router;