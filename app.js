'use strict';
//Modulos imprtados
var express=require('express');
var parser=require('body-parser');
var session=require('express-session');
var cookieParser=require('cookie-parser');
var passport=require('passport');
var mongoose=require('mongoose');


mongoose.connect('mongodb://localhost/bdlogin',function(err){
	if(err) console.log(err);
});


//Instancia del objeto express
var app=express();

//rutas
var index=require('./routes/index');
var auth=require('./routes/auth.js');
var users=require('./routes/users');


//Middlewares importados
var midIsAuthenticated=require('./middlewares/isAuthenticate');

//Motor de vistas
app.set('view engine','jade');

//Parseo de datos
app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

//carpeta publica
app.use(express.static('public'));

//ajustes de express-session
app.use(session({
	secret: 'secret123231',
	saveUninitialized:true,
	resave:true
}));

app.use(cookieParser());


//inicializar passport
app.use(passport.initialize());
app.use(passport.session());


//importar las rutas
app.use('/',index);
app.use(auth);

app.use(midIsAuthenticated);
app.use(users);


//Servidor en escucha
app.listen(5050,function(){
	console.log('Servidor escuchando');
});