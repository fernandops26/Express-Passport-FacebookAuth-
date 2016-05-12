var mongoose=require('mongoose');


var Schema=mongoose.Schema;


var userSchema=Schema({
	local:{
		id:String,
		name:String,
		photo:String,
		imail:String,
		createAt:{type:Date,default:Date.now}
	},
	online:{
		provider:String,//Cuenta del usuario(Twitter o Facebook)
		provider_id:String,//Id que proporciona el proveedor
		name:String,//Nombre
		photo:String,//Foto del usuario
		email:String,
		createAt:{type:Date,default:Date.now}//Fecha de creacion
	}
});


var User;
if(mongoose.models.User){
	User=mongoose.model('User');
}else{
	User=mongoose.model('User',userSchema);
}


module.exports=User;