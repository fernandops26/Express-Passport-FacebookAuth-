'use strict';
//Modulos imprtados
var express=require('express');
var parser=require('body-parser');
var session=require('express-session');
var passport=require('passport');

//Instancia del objeto express
var app=express();

//rutas
var index=require('./routes/index');
var users=require('./routes/users');

//Motor de vistas
app.set('view engine','jade');

//Parseo de datos
app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

//carpeta publica
app.use(express.static('public'));

//ajustes de express-session
app.use(session({
	secret: 'secret',
	saveUninitialized:true,
	resave:true
}));


//inicializar passport
app.use(passport.initialize());
app.use(passport.session());

//importar las rutas
app.use('/',index);
app.use(users);


//Servidor en escucha
app.listen(5050,function(){
	console.log('Servidor escuchando');
});