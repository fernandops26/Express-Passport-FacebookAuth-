//Importa passport y sus estrategias
var LocalStrategy = require('passport-local').Strategy,
  FacebookStrategy=require('passport-facebook').Strategy,
  TwitterStrategy = require('passport-twitter').Strategy;

//Importa utils
var utils=require('../utils/utils.js');

//Importa modelo usuario
var User=require('../models/User');

//Importa configuracion
var config=require('./config');


module.exports=function(passport){

passport.serializeUser(function(user,done){
  done(null,user);
});

passport.deserializeUser(function(user,done){
  // User.findById(id,function(err,user){
  //   done(null,user);
  // });,
  done(null,user);
});


//Estrategia local-Signup
passport.use('local-signup',new LocalStrategy({
  usernameField: 'email',
  passwordField:'pass',
  passReqToCallback:true
},function(req,email, password, done) {
    User.findOne({'local.email':email},function(err,objUser){
      if(err){
        return done(err);
      }
      if(objUser){
        req.flash('signupMsj','El email ya esta registrado');
        return done(null,false);
      }else{
        var newUser=new User();
        newUser.local.name=utils.stringToUpper(req.body.name);
        newUser.local.photo=utils.nameForPhoto(req.body.name);
        newUser.local.email=email;
        newUser.local.password=newUser.generarHash(password);
        newUser.save(function(err){
          if(err){
            return done(err);
          }
          else{
            return done(null,newUser);
          }
        });
      }
    });
  }
));



//Estrategia local-login
passport.use('local-login',new LocalStrategy({
  usernameField: 'email',
  passwordField:'pass',
  passReqToCallback:true
},function(req,email, password, done) {
  User.findOne({'local.email':email},function(err,objUser){
    if(err) {
      return done(err);
    }
    if(!objUser){
      return done(null,false,req.flash('loginMsj','El email no existe'));
    } 
    else{
      if(objUser.verificarPassword(password)==true){
          return done(null,objUser);
      }else{
        return done(null,false,req.flash('loginMsj','Contraseña errónea'));
      }
    }
  });
}));

//Estrategia de Facebook
passport.use(new FacebookStrategy({
    clientID: config.facebookAuth.id,
    clientSecret: config.facebookAuth.secret,
    callbackURL: config.facebookAuth.callbackURL,
    profileFields : ['id','displayName','photos','emails']
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({'facebook.provider_id':profile.id},function(err,objUser){
      if(err){
        return done(err);
      } 
      if(objUser){
        //correccion a la url recibida de passport(imagen muy pequeña)
        objUser.facebook.photo='https://graph.facebook.com/'+profile.id+'/picture?type=large';
        return done(null,objUser);
      } 

      else{
        var newUser=new User();
        newUser.online.provider=profile.provider;
        newUser.online.provider_id=profile.id;
        newUser.online.name=profile.displayName;
        newUser.online.photo='https://graph.facebook.com/'+profile.id+'/picture?type=large';//antes profile.photos[0].value;
        newUser.online.email=profile.emails[0].value;
        

        newUser.save(function(err){
          if(err){
            return done(err);
          } 
           return done(null,newUser);
        });
      }

    });

  }
));


//Estrategia de Twitter
passport.use(new TwitterStrategy({
    consumerKey: config.twitterAuth.key,
    consumerSecret: config.twitterAuth.secret,
    callbackURL: config.twitterAuth.callbackURL,
    profileFields : ['id','displayName','photos','emails']
  },
  function(token, tokenSecret, profile, done) {
    User.findOne({'twitter.id':profile.id}, function(err, objUser) {
      if (err) { return done(err); }
      if(objUser){
        return done(null, objUser);
      }else{
        var newUser=new User();
        newUser.online.provider=profile.provider;
        newUser.online.provider_id=profile.provider_id;
        newUser.online.name=profile.displayName;
        var url_foto=profile.photos[0].value;
        url_foto=url_foto.replace('_normal','');
        newUser.online.photo=url_foto;
        newUser.online.email='';
        newUser.save(function(err){
          if(err){
            return done(err);
          }else{
            return done(null,newUser);
          }
        });

      }
    });
  }
));


}