/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
ramon bautista escalante*/
function mostrarAumento()
{  //variable
	let sueldo ;
	let nuevosueldo;
	let aumento ;
	//tranformo a number y asigno 
	sueldo = parseFloat (document.getElementById("txtIdSueldo").value);
	//ejecuto el porcentaje y asigno 
	aumento  = 0.10 * sueldo ;
	//ejecuto la suma para asignarlo a el nuevo sueldo 
	nuevosueldo= sueldo + aumento;
	//muestro el resultado por el cuadro de texto
	document.getElementById("txtIdResultado").value = nuevosueldo;
}
