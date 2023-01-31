/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
ramon bautista escalante
*/
function mostrar()
{  //variable
	let nombre;
 //solicito un dato y asigno
	nombre=prompt("ingrese su nombre");
//muestro en pantalla el dato solicitado 
	document.getElementById("txtIdNombre").value = nombre;
}

