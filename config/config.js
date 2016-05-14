var config={
	twitterAuth:{//Configuracion para el uso de la app con twitter
		key:'some twitter key',//llave de la app
		secret:'some twitter secret',//secret de la app
		callbackURL:'http://localhost:5050/auth/twitter/callback'//url para el retorno de autenticacion
	},
	facebookAuth:{//Configuracion para el uso de la app con facebook
		id:'some facebook id app',//id de la app
		secret:'come facebook secret',//secret de la app
		callbackURL:'http://localhost:5050/auth/facebook/callback'//url para el retorno de autenticacion
	}
}

module.exports=config;