/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
ramon bautista escalante*/
function mostrar()
{
    // variables
let nombre;
let Edad;
//obtengo los datos
nombre = document.getElementById ("txtIdNombre").value;
Edad = document.getElementById ("txtIdEdad").value;
//muestro la informacion 
alert(" usted se llama "  +  nombre  + " y tiene " + Edad  +" años");
}

