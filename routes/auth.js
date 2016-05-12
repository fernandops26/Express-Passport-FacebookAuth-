var express=require('express');
var router=express.Router();
var passport=require('passport');

require('../config/passport')(passport);

router.get('/auth/facebook',passport.authenticate('facebook',{scope: ['email'] }));

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
    // console.log(req.user);
    res.redirect('/home');
  });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

/**
 * Get a autenticacion con twitter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
 */
router.get('/auth/twitter',passport.authenticate('twitter'));


router.get('/auth/twitter/callback',passport.authenticate('twitter', { successRedirect: '/home',
                                     failureRedirect: '/login' }));

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