let a;	

function boton(){
	
	a = parseInt(document.getElementById("a").value, 0);
	
	comprobar();
}

function boton2(){
	
	a = parseInt(document.getElementById("a").value, 0);
	
	comprobar2();
}

function comprobar(){
	
		if(a>=7&&a<=11){
			document.getElementById("mensaje").innerHTML="Buenos días.";
		} else if (a>=12&&a<=21){
			document.getElementById("mensaje").innerHTML="Buenas tardes.";
		} else if ((a<=6&&a>=0)||(a>=22&&a<=24)){
			document.getElementById("mensaje").innerHTML="Buenas noches.";
		} else {
			document.getElementById("mensaje").innerHTML="Esa hora no existe.";
		}
}

function comprobar2(){
	
	switch (a){
		case 1:
		case 2:
		case 3:
		case 4:
		case 5: 
		case 6:
		case 22:
		case 23:
		case 24:
			document.getElementById("mensaje").innerHTML="Buenas noches.";
			break;
		case 7:
		case 8:
		case 9: 
		case 10:
		case 11:
			document.getElementById("mensaje").innerHTML="Buenos días.";
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 18:
		case 19:
		case 20:
		case 21:
			document.getElementById("mensaje").innerHTML="Buenas tardes.";
			break;		
		default:
			document.getElementById("mensaje").innerHTML="Esa hora no existe.";
			break;
	}
}