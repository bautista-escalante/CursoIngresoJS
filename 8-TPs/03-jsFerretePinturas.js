/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
ramon bautista escalante
*/
function FahrenheitCentigrados () 
{
let gradosf;
let gradosc;
gradosf = parseFloat(document.getElementById("txtIdTemperatura").value );
gradosc = gradosf * 9/5 + 32;

alert (gradosf + " grados fahrenheit es "+ gradosc + " grados centigrados ")

	
}

function CentigradosFahrenheit () 
{
	let gradosf;
    let gradosc;
gradosc = parseFloat(document.getElementById("txtIdTemperatura").value );
gradosf = (gradosc * 9/5) + 32 ;

alert (gradosc + " grados centigrados son " + gradosf + " grados fahrenheit ")
}
