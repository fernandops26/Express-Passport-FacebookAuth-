var User=require('../models/user');

module.exports=function(req,res,next){

	if(!req.user){
		return res.redirect('/login');
	}else{
		User.findOne({$or:[{'local.id':req.user.local.id},{'online.provider_id':req.user.online.provider_id}]},function(err,user){
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