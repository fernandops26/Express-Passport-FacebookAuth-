'use strict';
//Modulos imprtados
var express=require('express');
var parser=require('body-parser');
var session=require('express-session');
var cookieParser=require('cookie-parser');
var passport=require('passport');
var mongoose=require('mongoose');
var flash=require('connect-flash');
//Conexion a mongoDB
mongoose.connect('mongodb://127.0.0.1/bdlogin',function(err){
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
app.use(flash());


//inicializar passport
app.use(passport.initialize());
app.use(passport.session());


//usar rutas
app.use('/',index);
app.use(auth);

//Middleware para saber si esta autenticado
app.use(midIsAuthenticated);
//usar rutas que requiren autenticado
app.use(users);


//Servidor en escucha
app.listen(5050,function(){
	console.log('Servidor escuchando');
});