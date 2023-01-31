/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
ramon bautista escalante*/
function sumar()
{  //variables 
	let num1;
	let num2;
	let resultado; 
	//obtengo los numeros ingresados 
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	//tranformo a number y asigno
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	//proceso la suma y asigno 
	resultado = num1 + num2; 
	//lo muestro por pantalla
	alert("la suma es " + resultado);
}

