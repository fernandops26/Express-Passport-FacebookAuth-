var User=require('../models/user');//Importa el modelo de Usuario

module.exports=function(req,res,next){

	if(!req.user){
		return res.redirect('/login');
	}else{
		//Busca en cada peticion si el id del usuario autenticado existe en la BD 
		User.findOne({$or:[{'local.email':req.user.local.email},{'online.provider_id':req.user.online.provider_id}]},function(err,user){
			if(err){
				return res.redirect('/login');
			}
			if(!user){
				return res.redirect('/login');
			}else{
				return next();
			}
		});

	}
}