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

var nameForPhoto=function (cadena){
	var inicialNombre=cadena.substr(0,1);
	inicialNombre=inicialNombre.toLowerCase()+'.jpg';
	return inicialNombre;
}

module.exports.stringToUpper=stringToUpper;
module.exports.nameForPhoto=nameForPhoto;