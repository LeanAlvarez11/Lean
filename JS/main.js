//ejercicio 2
console.log ("Starting Javascrip...");
var myname="leandro";
console.log (myname);
var age=31;
console.log (age);
var ignasiage=32;
var agediff=age-ignasiage;
console.log (agediff);
if (age>21)
	{
		console.log ("tiene mas de 21 años")           
	}
else 																				
	{																//compara mi edad con 21 años
		console.log ("no tiene mas de 21 años")
	}
if (age<ignasiage)
	{
		console.log ("ignasi es mayor que usted")
	}
else if (age>ignasiage)
	{
		console.log ("ignasi es menor que usted")					//compara mi edad con la de ignasi
	}
else
	{
		console.log ("tiene la misma edad que ignasi")
	}
//ejercicio 3
var names = ["nahu","alan","diego","ariel","lean"]
names.sort();														//ordena alfabeticamente el vector
for (var i=0;i<5;i++)
	{
		console.log (names[i]);	
	}
var edades = [14,15,12,24,19];
for (var i=0;i<5;i++)
	{
		if (edades[i]%2==0)
			{														
				console.log (edades[i]);
			}
	}
function mostrarmenor (array)
	{																//crea una funcion para que muestre el menor de un vector
		var cont = array[0];
		for (var i=1; i<array.length;i++)
			{
				if (array[i]<cont)
					{
						cont = array [i]
					}
			}
		console.log (cont);
	}
mostrarmenor (edades);
function mostrarmayor (array)
	{																//crea una funcion para que muestre el mayor de un vector
		var cont = array[0];
		for (var i=1; i<array.length;i++)
			{
				if (array[i]>cont)
					{
						cont = array [i]
					}
			}
		console.log (cont);
	}
mostrarmayor (edades);
function mostrarindice (array,i)
	{
		console.log (array[i]);										//crea una funcion que muestre un array con un indice indicado
	}
mostrarindice (edades,3);