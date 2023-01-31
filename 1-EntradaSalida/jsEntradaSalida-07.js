/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"
ramon bautista escalante*/ 
function sumar()
{	//declaro variantes 
	let num1; 
	let num2; 
	let resultado;
	//asigno los valores a esas variables  ingresados por el usuario
	num1 =parseInt( document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	//proceso la cuenta y asigno el resultdo a  otra variante
	resultado = num1 + num2 ;
	//muestro el resultado ne pantalla
	alert("la suma es "+ resultado );	
}

function restar()
{
	let num1; 
	let num2; 
	let resultado;
	num1 =parseInt( document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = num1 - num2;
	alert ("la resta es " + resultado);
	
}

function multiplicar()
{ 
	let num1; 
	let num2; 
	let resultado;
	num1 =parseInt( document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = num1 * num2;
	alert("la multiplicacion es " + resultado) ;
}

function dividir()
{
	let num1; 
	let num2; 
	let resultado;
	num1 =parseInt( document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
resultado = num1 /num2 ;
alert("la division es "+ resultado);
}

