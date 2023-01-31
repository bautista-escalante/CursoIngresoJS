/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
ramon bautista escalante */
function Sumar () 
{ 
    let num1; 
    let num2;
    let num3;
    let resultado
    num1 = parseFloat(document.getElementById("txtIdPrecioUno").value );
    num2= parseFloat(document.getElementById("txtIdPrecioDos").value);
    num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    resultado = num1 + num2 + num3 ;
    alert ("el precio final es " + resultado);
	
}
function Promedio () 
{
    let num1; 
    let num2;
    let num3;
    let resultado
    num1 = parseFloat(document.getElementById("txtIdPrecioUno").value );
    num2= parseFloat(document.getElementById("txtIdPrecioDos").value);
    num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    resultado = (num1 + num2 + num3) / 3 ;
    alert ("el promedio es " + resultado);

	
}
function PrecioFinal () 
{
    let num1 ;
    let num2;
    let num3; 
    let resultado;
    let iva
    let resultadofinal
    num1 = parseFloat(document.getElementById("txtIdPrecioUno").value );
    num2= parseFloat(document.getElementById("txtIdPrecioDos").value);
    num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    resultado = num1 + num2 + num3;
    iva = resultado * 0.21;
    resultadofinal = resultado +iva;
     
    alert ("el precio final es " + resultadofinal);

}