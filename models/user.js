var mongoose=require('mongoose');

var Schema=mongoose.Schema;


var userSchema=new Schema({
	local:{
		id:String,
		name:String,
		photo:String,
		createAt:{type:Date,default:Date.now}
	},
	facebook:{
		provider:String,//Cuenta del usuario(Twitter o Facebook)
		provider_id:String,//Id que proporciona el proveedor
		name:String,//Nombre
		photo:String,//Foto del usuario
		createAt:{type:Date,default:Date.now}//Fecha de creacion
	}
});


var User=mongoose.model('User',userSchema);


module.exports=User;