var mongoose=require('mongoose');
var bcrypt=require('bcrypt');


var Schema=mongoose.Schema;

//Esquema de datos del usuario registrado por app(local) y usuario registrado via online(Facebook o Twitter)
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

//Generacion de un hash
userSchema.methods.generarHash=function(password){
	return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
}


//Comparacion de password 
userSchema.methods.verificarPassword=function(password){
	return bcrypt.compareSync(password,this.local.password);
}


var User;


if(mongoose.models.User){
	User=mongoose.model('User');
}else{
	User=mongoose.model('User',userSchema);
}


module.exports=User;