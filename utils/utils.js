//Convierte a mayuscula el primer caracter de cada alabra perteneciente a una cadena de texto
var stringToUpper=function (cadena){
	var arrayPalabras= cadena.split(' ');
	var numPalabras=arrayPalabras.length;
	var palabraParcial="";
	var letraParcial="";
	var cadenaFinal="";

	for (var i = 0; i <arrayPalabras.length; i++) {
		letraParcial=arrayPalabras[i].charAt(0).toUpperCase();
		palabraParcial=letraParcial+arrayPalabras[i].substr(1)+' ';
		cadenaFinal+=palabraParcial;
	}

	return cadenaFinal;
}


//Obtiene la letra inicial de un nombre y lo retorna con extension .jpg
var nameForPhoto=function (cadena){
	var inicialNombre=cadena.substr(0,1);
	inicialNombre=inicialNombre.toLowerCase()+'.jpg';
	return inicialNombre;
}


//Exporta las funciones
module.exports.stringToUpper=stringToUpper;
module.exports.nameForPhoto=nameForPhoto;