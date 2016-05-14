var express=require('express');
var router=express.Router();
var passport=require('passport');
var User=require('../models/user.js');

require('../config/passport')(passport);


//Get a autentucacion con Facebook
router.get('/auth/facebook',passport.authenticate('facebook',{scope: ['email'] }));

/**
 * Get a el callback que se encarga
 * de redireccionar a
 * una pagina que requiera autorizacion con Facebook si se logeo correctamente,
 * o una pagina para intentar otra vez el login si ocurrio un error
 */
router.get('/auth/facebook/callback',
	passport.authenticate('facebook', 
	{ failureRedirect: '/signup' }),
  function(req, res) {
    // console.log(req.user);
    res.redirect('/home');
  });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

/**
 * Get a autenticacion con twitter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
 */
router.get('/auth/twitter',passport.authenticate('twitter'));


/**
 * Get a el callback que se encarga
 * de redireccionar a
 * una pagina que requiera autorizacion con Twitter si se logeo correctamente,
 * o una pagina para intentar otra vez el login si ocurrio un error
 */
router.get('/auth/twitter/callback',passport.authenticate('twitter', { successRedirect: '/home',
                                     failureRedirect: '/signup' }));

/**
 * Get a autenticacion local
 */
router.post('/auth/signup/local',passport.authenticate('local-signup',{
	successRedirect:'/home',
	failureRedirect:'/signup',
	failureFlash:true
}));

router.post('/auth/login/local',passport.authenticate('local-login',{
	successRedirect:'/home',
	failureRedirect:'/login',
	failureFlash:true
}));

router.post('/query/user',function(req,res){
	console.log(req.body.email);
	User.findOne({'local.email':req.body.email},function(err,objUser){
		if(err){
			return res.send(err);
		}
		if(!objUser){
			return res.send(null);
		}
		return res.send(objUser.local.photo);
	});
});

module.exports=router;