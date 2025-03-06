var turno=1;

var compro=2;

var col0=0;

var col1=0;

var col2=0;

var col3=0;

var col4=0;

var col5=0;

var col6=0;

var jugador1="Jugador 1";

var jugador2="Jugador 2";

let matriz = [
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0]
];

function nombres() {
	
	jugador1 = prompt("Aquí el nombre del jugador 1.");
	
	jugador2 = prompt("Aquí el nombre del jugador 2.");
	
}

function alterStyle(col, fila) {
	if (turno==1) {
		
		if (col==0) {
			
			document.getElementById(col+"-"+col0).src="img/amarillo.jpg.jfif";
			
			matriz [col0][col]=1;
			
			col0++;
			
		}
		
		if (col==1) {
			
			document.getElementById(col+"-"+col1).src="img/amarillo.jpg.jfif";
			
			matriz [col1][col]=1;
			
			col1++;
			
		}
		
		if (col==2) {
			
			document.getElementById(col+"-"+col2).src="img/amarillo.jpg.jfif";
			
			matriz [col2][col]=1;
			
			col2++;
			
		}
		
		if (col==3) {
			
			document.getElementById(col+"-"+col3).src="img/amarillo.jpg.jfif";
			
			matriz [col3][col]=1;
			
			col3++;
			
		}
		
		if (col==4) {
			
			document.getElementById(col+"-"+col4).src="img/amarillo.jpg.jfif";
			
			matriz [col4][col]=1;
			
			col4++;
			
		}
		
		if (col==5) {
			
			document.getElementById(col+"-"+col5).src="img/amarillo.jpg.jfif";
			
			matriz [col5][col]=1;
			
			col5++;
			
		}
		
		if (col==6) {
			
			document.getElementById(col+"-"+col6).src="img/amarillo.jpg.jfif";
			
			matriz [col6][col]=1;
			
			col6++;
			
		}
		
		turno++;
		
	} else {
		
		if (col==0) {
			
			document.getElementById(col+"-"+col0).src="img/rojo.jpg.jfif";
			
			matriz [col0][col]=2;
			
			col0++;
			
		}
		
		if (col==1) {
			
			document.getElementById(col+"-"+col1).src="img/rojo.jpg.jfif";
			
			matriz [col1][col]=2;
			
			col1++;
			
		}
		
		if (col==2) {
			
			document.getElementById(col+"-"+col2).src="img/rojo.jpg.jfif";
			
			matriz [col2][col]=2;
			
			col2++;
			
		}
		
		if (col==3) {
			
			document.getElementById(col+"-"+col3).src="img/rojo.jpg.jfif";
			
			matriz [col3][col]=2;
			
			col3++;
			
		}
		
		if (col==4) {
			
			document.getElementById(col+"-"+col4).src="img/rojo.jpg.jfif";
			
			matriz [col4][col]=2;
			
			col4++;
			
		}
		
		if (col==5) {
			
			document.getElementById(col+"-"+col5).src="img/rojo.jpg.jfif";
			
			matriz [col5][col]=2;
			
			col5++;
			
		}
		
		if (col==6) {
			
			document.getElementById(col+"-"+col6).src="img/rojo.jpg.jfif";
			
			matriz [col6][col]=2;
			
			col6++;
			
		}
		
		turno--;
	}
	
	comprobarTurno();
	
	console.log(matriz);
}

function comprobarTurno() {
	
	if (compro!=0){ 
	
	if (matriz[0][0]==1&&matriz[1][0]==1&&matriz[2][0]==1&&matriz[3][0]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][0]==1&&matriz[1][0]==1&&matriz[2][0]==1&&matriz[3][0]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][0]==1&&matriz[5][0]==1&&matriz[2][0]==1&&matriz[3][0]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][1]==1&&matriz[1][1]==1&&matriz[2][1]==1&&matriz[3][1]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][1]==1&&matriz[1][1]==1&&matriz[2][1]==1&&matriz[3][1]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][1]==1&&matriz[5][1]==1&&matriz[2][1]==1&&matriz[3][1]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][2]==1&&matriz[1][2]==1&&matriz[2][2]==1&&matriz[3][2]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][2]==1&&matriz[1][2]==1&&matriz[2][2]==1&&matriz[3][2]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][2]==1&&matriz[5][2]==1&&matriz[2][2]==1&&matriz[3][2]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][3]==1&&matriz[1][3]==1&&matriz[2][3]==1&&matriz[3][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][3]==1&&matriz[1][3]==1&&matriz[2][3]==1&&matriz[3][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][3]==1&&matriz[5][3]==1&&matriz[2][3]==1&&matriz[3][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][4]==1&&matriz[1][4]==1&&matriz[2][4]==1&&matriz[3][4]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][4]==1&&matriz[1][4]==1&&matriz[2][4]==1&&matriz[3][4]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][4]==1&&matriz[5][4]==1&&matriz[2][4]==1&&matriz[3][4]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][5]==1&&matriz[1][5]==1&&matriz[2][5]==1&&matriz[3][5]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][5]==1&&matriz[1][5]==1&&matriz[2][5]==1&&matriz[3][5]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][5]==1&&matriz[5][5]==1&&matriz[2][5]==1&&matriz[3][5]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][6]==1&&matriz[1][6]==1&&matriz[2][6]==1&&matriz[3][6]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][6]==1&&matriz[1][6]==1&&matriz[2][6]==1&&matriz[3][6]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][6]==1&&matriz[5][6]==1&&matriz[2][6]==1&&matriz[3][6]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	
	
	if (matriz[0][0]==1&&matriz[0][1]==1&&matriz[0][2]==1&&matriz[0][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][4]==1&&matriz[0][1]==1&&matriz[0][2]==1&&matriz[0][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][4]==1&&matriz[0][5]==1&&matriz[0][2]==1&&matriz[0][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][4]==1&&matriz[0][5]==1&&matriz[0][6]==1&&matriz[0][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][0]==1&&matriz[1][1]==1&&matriz[1][2]==1&&matriz[1][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][4]==1&&matriz[1][1]==1&&matriz[1][2]==1&&matriz[1][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][4]==1&&matriz[1][5]==1&&matriz[1][2]==1&&matriz[1][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][4]==1&&matriz[1][5]==1&&matriz[1][6]==1&&matriz[1][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][0]==1&&matriz[2][1]==1&&matriz[2][2]==1&&matriz[2][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][4]==1&&matriz[2][1]==1&&matriz[2][2]==1&&matriz[2][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][4]==1&&matriz[2][5]==1&&matriz[2][2]==1&&matriz[2][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][4]==1&&matriz[2][5]==1&&matriz[2][6]==1&&matriz[2][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[3][0]==1&&matriz[3][1]==1&&matriz[3][2]==1&&matriz[3][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[3][4]==1&&matriz[3][1]==1&&matriz[3][2]==1&&matriz[3][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[3][4]==1&&matriz[3][5]==1&&matriz[3][2]==1&&matriz[3][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[3][4]==1&&matriz[3][5]==1&&matriz[3][6]==1&&matriz[3][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][0]==1&&matriz[4][1]==1&&matriz[4][2]==1&&matriz[4][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][4]==1&&matriz[4][1]==1&&matriz[4][2]==1&&matriz[4][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][4]==1&&matriz[4][5]==1&&matriz[4][2]==1&&matriz[4][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][4]==1&&matriz[4][5]==1&&matriz[4][6]==1&&matriz[4][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[5][0]==1&&matriz[5][1]==1&&matriz[5][2]==1&&matriz[5][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[5][4]==1&&matriz[5][1]==1&&matriz[5][2]==1&&matriz[5][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[5][4]==1&&matriz[5][5]==1&&matriz[5][2]==1&&matriz[5][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[5][4]==1&&matriz[5][5]==1&&matriz[5][6]==1&&matriz[5][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	
	
	if (matriz[0][0]==1&&matriz[1][1]==1&&matriz[2][2]==1&&matriz[3][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][0]==1&&matriz[2][1]==1&&matriz[3][2]==1&&matriz[4][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][0]==1&&matriz[3][1]==1&&matriz[4][2]==1&&matriz[5][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][1]==1&&matriz[1][2]==1&&matriz[2][3]==1&&matriz[3][4]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][1]==1&&matriz[2][2]==1&&matriz[3][3]==1&&matriz[4][4]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][1]==1&&matriz[3][2]==1&&matriz[4][3]==1&&matriz[5][4]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][2]==1&&matriz[1][3]==1&&matriz[2][4]==1&&matriz[3][5]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][2]==1&&matriz[2][3]==1&&matriz[3][4]==1&&matriz[4][5]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][2]==1&&matriz[3][3]==1&&matriz[4][4]==1&&matriz[5][5]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][3]==1&&matriz[1][4]==1&&matriz[2][5]==1&&matriz[3][6]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][3]==1&&matriz[2][4]==1&&matriz[3][5]==1&&matriz[4][6]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][3]==1&&matriz[3][4]==1&&matriz[4][5]==1&&matriz[5][6]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	
	
	if (matriz[0][6]==1&&matriz[1][5]==1&&matriz[2][4]==1&&matriz[3][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][6]==1&&matriz[2][5]==1&&matriz[3][4]==1&&matriz[4][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][6]==1&&matriz[3][5]==1&&matriz[4][4]==1&&matriz[5][3]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][5]==1&&matriz[1][4]==1&&matriz[2][3]==1&&matriz[3][2]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][5]==1&&matriz[2][4]==1&&matriz[3][3]==1&&matriz[4][2]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][5]==1&&matriz[3][4]==1&&matriz[4][3]==1&&matriz[5][2]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][4]==1&&matriz[1][3]==1&&matriz[2][2]==1&&matriz[3][1]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][4]==1&&matriz[2][3]==1&&matriz[3][2]==1&&matriz[4][1]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][4]==1&&matriz[3][3]==1&&matriz[4][2]==1&&matriz[5][1]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][3]==1&&matriz[1][2]==1&&matriz[2][1]==1&&matriz[3][0]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][3]==1&&matriz[2][2]==1&&matriz[3][1]==1&&matriz[4][0]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][3]==1&&matriz[3][2]==1&&matriz[4][1]==1&&matriz[5][0]==1)  {
		document.getElementById("turno").innerHTML=""+jugador1+" ha ganado.";	
		compro=0;
	}
	
	
	
	
	
	
	if (matriz[0][0]==2&&matriz[1][0]==2&&matriz[2][0]==2&&matriz[3][0]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][0]==2&&matriz[1][0]==2&&matriz[2][0]==2&&matriz[3][0]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][0]==2&&matriz[5][0]==2&&matriz[2][0]==2&&matriz[3][0]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][1]==2&&matriz[1][1]==2&&matriz[2][1]==2&&matriz[3][1]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][1]==2&&matriz[1][1]==2&&matriz[2][1]==2&&matriz[3][1]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][1]==2&&matriz[5][1]==2&&matriz[2][1]==2&&matriz[3][1]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][2]==2&&matriz[1][2]==2&&matriz[2][2]==2&&matriz[3][2]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][2]==2&&matriz[1][2]==2&&matriz[2][2]==2&&matriz[3][2]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][2]==2&&matriz[5][2]==2&&matriz[2][2]==2&&matriz[3][2]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][3]==2&&matriz[1][3]==2&&matriz[2][3]==2&&matriz[3][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][3]==2&&matriz[1][3]==2&&matriz[2][3]==2&&matriz[3][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][3]==2&&matriz[5][3]==2&&matriz[2][3]==2&&matriz[3][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][4]==2&&matriz[1][4]==2&&matriz[2][4]==2&&matriz[3][4]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][4]==2&&matriz[1][4]==2&&matriz[2][4]==2&&matriz[3][4]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][4]==2&&matriz[5][4]==2&&matriz[2][4]==2&&matriz[3][4]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][5]==2&&matriz[1][5]==2&&matriz[2][5]==2&&matriz[3][5]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][5]==2&&matriz[1][5]==2&&matriz[2][5]==2&&matriz[3][5]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][5]==2&&matriz[5][5]==2&&matriz[2][5]==2&&matriz[3][5]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][6]==2&&matriz[1][6]==2&&matriz[2][6]==2&&matriz[3][6]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][6]==2&&matriz[1][6]==2&&matriz[2][6]==2&&matriz[3][6]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][6]==2&&matriz[5][6]==2&&matriz[2][6]==2&&matriz[3][6]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	
	
	if (matriz[0][0]==2&&matriz[0][1]==2&&matriz[0][2]==2&&matriz[0][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][4]==2&&matriz[0][1]==2&&matriz[0][2]==2&&matriz[0][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][4]==2&&matriz[0][5]==2&&matriz[0][2]==2&&matriz[0][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][4]==2&&matriz[0][5]==2&&matriz[0][6]==2&&matriz[0][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][0]==2&&matriz[1][1]==2&&matriz[1][2]==2&&matriz[1][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][4]==2&&matriz[1][1]==2&&matriz[1][2]==2&&matriz[1][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][4]==2&&matriz[1][5]==2&&matriz[1][2]==2&&matriz[1][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][4]==2&&matriz[1][5]==2&&matriz[1][6]==2&&matriz[1][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][0]==2&&matriz[2][1]==2&&matriz[2][2]==2&&matriz[2][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][4]==2&&matriz[2][1]==2&&matriz[2][2]==2&&matriz[2][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][4]==2&&matriz[2][5]==2&&matriz[2][2]==2&&matriz[2][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][4]==2&&matriz[2][5]==2&&matriz[2][6]==2&&matriz[2][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[3][0]==2&&matriz[3][1]==2&&matriz[3][2]==2&&matriz[3][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[3][4]==2&&matriz[3][1]==2&&matriz[3][2]==2&&matriz[3][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[3][4]==2&&matriz[3][5]==2&&matriz[3][2]==2&&matriz[3][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[3][4]==2&&matriz[3][5]==2&&matriz[3][6]==2&&matriz[3][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][0]==2&&matriz[4][1]==2&&matriz[4][2]==2&&matriz[4][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][4]==2&&matriz[4][1]==2&&matriz[4][2]==2&&matriz[4][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][4]==2&&matriz[4][5]==2&&matriz[4][2]==2&&matriz[4][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[4][4]==2&&matriz[4][5]==2&&matriz[4][6]==2&&matriz[4][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[5][0]==2&&matriz[5][1]==2&&matriz[5][2]==2&&matriz[5][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[5][4]==2&&matriz[5][1]==2&&matriz[5][2]==2&&matriz[5][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[5][4]==2&&matriz[5][5]==2&&matriz[5][2]==2&&matriz[5][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[5][4]==2&&matriz[5][5]==2&&matriz[5][6]==2&&matriz[5][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	
	
	if (matriz[0][0]==2&&matriz[1][1]==2&&matriz[2][2]==2&&matriz[3][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][0]==2&&matriz[2][1]==2&&matriz[3][2]==2&&matriz[4][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][0]==2&&matriz[3][1]==2&&matriz[4][2]==2&&matriz[5][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][1]==2&&matriz[1][2]==2&&matriz[2][3]==2&&matriz[3][4]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][1]==2&&matriz[2][2]==2&&matriz[3][3]==2&&matriz[4][4]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][1]==2&&matriz[3][2]==2&&matriz[4][3]==2&&matriz[5][4]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][2]==2&&matriz[1][3]==2&&matriz[2][4]==2&&matriz[3][5]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][2]==2&&matriz[2][3]==2&&matriz[3][4]==2&&matriz[4][5]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][2]==2&&matriz[3][3]==2&&matriz[4][4]==2&&matriz[5][5]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][3]==2&&matriz[1][4]==2&&matriz[2][5]==2&&matriz[3][6]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][3]==2&&matriz[2][4]==2&&matriz[3][5]==2&&matriz[4][6]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][3]==2&&matriz[3][4]==2&&matriz[4][5]==2&&matriz[5][6]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	
	
	if (matriz[0][6]==2&&matriz[1][5]==2&&matriz[2][4]==2&&matriz[3][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][6]==2&&matriz[2][5]==2&&matriz[3][4]==2&&matriz[4][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][6]==2&&matriz[3][5]==2&&matriz[4][4]==2&&matriz[5][3]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][5]==2&&matriz[1][4]==2&&matriz[2][3]==2&&matriz[3][2]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][5]==2&&matriz[2][4]==2&&matriz[3][3]==2&&matriz[4][2]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][5]==2&&matriz[3][4]==2&&matriz[4][3]==2&&matriz[5][2]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][4]==2&&matriz[1][3]==2&&matriz[2][2]==2&&matriz[3][1]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][4]==2&&matriz[2][3]==2&&matriz[3][2]==2&&matriz[4][1]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][4]==2&&matriz[3][3]==2&&matriz[4][2]==2&&matriz[5][1]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[0][3]==2&&matriz[1][2]==2&&matriz[2][1]==2&&matriz[3][0]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[1][3]==2&&matriz[2][2]==2&&matriz[3][1]==2&&matriz[4][0]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	if (matriz[2][3]==2&&matriz[3][2]==2&&matriz[4][1]==2&&matriz[5][0]==2)  {
		document.getElementById("turno").innerHTML=""+jugador2+" ha ganado.";	
		compro=0;
	}
	
	}

	if (compro==1) {
		document.getElementById("turno").innerHTML="Es el turno de \'"+jugador1+"\' (X).";
		compro++;
	} else  if (compro==2){
		document.getElementById("turno").innerHTML="Es el turno de \'"+jugador2+"\' (O).";
		compro--;
	}
}