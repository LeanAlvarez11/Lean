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
var ejem = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
function mostrarindice (array,i)
	{
		console.log (array[i]);										//crea una funcion que muestre un array con un indice indicado
	}
mostrarindice (ejem,1);
function repetidos (array)
	{
		for (var i=0;i<array.length;i++)
			{
				for (var j=i+1;j<array.length;j++)					//crea una funcion que muestre los numeros repetidos
					{
						if (array[j]==array[i])
							{
								console.log (array[i]);
							}
					}
			}
	}
repetidos (ejem);
myColor = ["Red", "Green", "White", "Black"];
function arraytostring (array)
	{
		var x = array.toString()								//crea una funcion que convierta un array en un string
		console.log (x);
	}
arraytostring (myColor);
var cadena=1234;
function invertir(int) 
	{
	  var string = int.toString();
	  var x = string.length;
	  var cadenaInvertida = "";

	  while (x>=0)
	   	{
		    cadenaInvertida = cadenaInvertida + string.charAt(x);	//funcion que invierte una string
		    x--;
		}
	    console.log (cadenaInvertida);
	  }
invertir (cadena);
var  ejem2="hola";
function ordenar (string)
 	{
 		var vec=[];
 		var x = string.length;
 		while (x>=0)
 			{
 				x--;
 				vec[x]=string.charAt(x).split();	//funcion que ordene una string alfabeticamente
 			}
 		vec.sort();
 		string=vec.toString();
 		let s = string.replace(/,/g, ""); //.replace () remplaza algo "(/o/g" por otra cosa ","a")"
 		console.log (s);
 	}
orden
ar (ejem2); 
function mayusculas (string)
	{
		var vec =[];
		vec []=string.split();
	}
