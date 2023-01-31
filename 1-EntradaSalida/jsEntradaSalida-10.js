/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
ramon bautista escalante*/
function mostrarAumento()
{
//variable
let IMPORTE ;
let resultado;
let descuento ;
//tranformo a number y asigno 
IMPORTE  = parseFloat (document.getElementById("txtIdImporte").value);
//ejecuto el porcentaje y asigno 
descuento = 0.25* IMPORTE ;
//ejecuto la resta para asignarlo a el  
resultado= IMPORTE + descuento;
//muestro el resultado por el cuadro de texto
document.getElementById("txtIdResultado").value = resultado;
}
