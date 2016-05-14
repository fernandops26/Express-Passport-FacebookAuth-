var mongoose=require('mongoose');
var bcrypt=require('bcrypt');


var Schema=mongoose.Schema;

//datos de usuario registrado por app y usuario registrado via(Facebook o Twitter)
var userSchema=Schema({
	local:{
		name:String,
		photo:String,
		email:String,
		password:String,
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

userSchema.methods.generarHash=function(password){
	return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
}

userSchema.methods.verificarPassword=function(passwordEncrypt){
	return bcrypt.compareSync(passwordEncrypt,this.local.password);
}


var User;
if(mongoose.models.User){
	User=mongoose.model('User');
}else{
	User=mongoose.model('User',userSchema);
}


module.exports=User;