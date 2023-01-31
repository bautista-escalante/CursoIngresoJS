/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
ramon bautista escalante*/
function SacarResto()
{ //varables 
	let num1 ;
	let num2 ;
	let resultado;
	//transformo a number y asigno 
	num1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
    num2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	// ejecuto el resto y asigno 
    resultado = num1 % num2;
	// muestro el resultado  
	alert("el resto es " + resultado);
}
