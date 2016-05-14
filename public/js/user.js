$(document).on('ready',function(){
var login_email=$('#login_email');
var login_avatar=$('#login_avatar');
var mensajes_cerrar=$('#mensajes_cerrar');

	login_email.on('blur',function(){
		var valor=$(this).val();
		console.log(valor);
		var validacion=valor.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i);

		if(validacion){
			var email={
				email:valor
			}
			
			$.post('/query/user',email,function(photo){
				if(photo!=null && photo!=""){
					login_avatar.attr('src','img/'+photo);
				}else{
					login_avatar.attr('src','img/none.svg');
				}
			}).error(function(){

			});

		}
	});



	mensajes_cerrar.on('click',function(){
		$(this).parent().addClass('mensajes_oculto');
	});
});