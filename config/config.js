var config={
	twitterAuth:{
		key:'some twitter key',
		secret:'some twitter secret',
		callbackURL:'http://localhost:5050/auth/twitter/callback'
	},
	facebookAuth:{
		id:'some facebook id app',
		secret:'come facebook secret',
		callbackURL:'http://localhost:5050/auth/facebook/callback'
	}
}

module.exports=config;