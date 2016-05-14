var express=require('express');
var router=express.Router();
var passport=require('passport');
var User=require('../models/user.js');

require('../config/passport')(passport);

//Rutas del proceso de autenticacion


//Autenticacion con Facebook
router.get('/auth/facebook',passport.authenticate('facebook',{scope: ['email'] }));

/**
 * Callback que se encarga
 * de redireccionar a
 * una pagina que requiera autorizacion con Facebook si se logeo correctamente,
 * o una pagina para intentar otra vez el login si ocurrio un error
 */
router.get('/auth/facebook/callback',
	passport.authenticate('facebook', 
	{ failureRedirect: '/signup' }),
  function(req, res) {
    res.redirect('/home');
  });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

/**
 * Autenticacion con Twitter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
 */
router.get('/auth/twitter',passport.authenticate('twitter'));


/**
 * Callback que se encarga
 * de redireccionar a
 * una pagina que requiera autorizacion con Twitter si se logeo correctamente,
 * o una pagina para intentar otra vez el login si ocurrio un error
 */
router.get('/auth/twitter/callback',passport.authenticate('twitter', { successRedirect: '/home',
                                     failureRedirect: '/signup' }));

/**
 * Autenticacion de signup local
 */
router.post('/auth/signup/local',passport.authenticate('local-signup',{
	successRedirect:'/home',
	failureRedirect:'/signup',
	failureFlash:true
}));

//Autenticacion de login local
router.post('/auth/login/local',passport.authenticate('local-login',{
	successRedirect:'/home',
	failureRedirect:'/login',
	failureFlash:true
}));


//Consulta de email de usuario
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