var ficha1=null
var ficha2=null
var temporal=null
var fila1=[0,0,0,0,0,0,0]
var fila2=[0,0,0,0,0,0,0]
var fila3=[0,0,0,0,0,0,0]
var fila4=[0,0,0,0,0,0,0]
var fila5=[0,0,0,0,0,0,0]
var fila6=[0,0,0,0,0,0,0]
var fila7=[0,0,0,0,0,0,0]
var matriz=[fila1,fila2,fila3,fila4,fila5,fila6,fila7]
var fila1b=[0,0,0,0,0,0,0]
var fila2b=[0,0,0,0,0,0,0]
var fila3b=[0,0,0,0,0,0,0]
var fila4b=[0,0,0,0,0,0,0]
var fila5b=[0,0,0,0,0,0,0]
var fila6b=[0,0,0,0,0,0,0]
var fila7b=[0,0,0,0,0,0,0]
var matriz2=[fila1b,fila2b,fila3b,fila4b,fila5b,fila6b,fila7b]


var i=0;j=0;k=0;z=0;
var x1=0;y1=0;x2=0;y2=0;pos1=0;pos2=0; 

var hayrepetido=true
var minutosjuego=2
var minutos=minutosjuego
var segundos=0
var reloj; 
var intervalojuego;
var movimientos=0 ;puntaje=0
var jugando=true



function numero(obj){
	return obj.src.substring(obj.src.length-5,obj.src.length-4)
	
}


function amarillo(elemento){
	$(elemento).animate(
    	{
      	color: "yellow"

   		 }, 500, function(){
    	 	 blanco(elemento)
   		 }
  		)
  	
}

function blanco(elemento){

  $(elemento).animate(
    {
      color: "white"
    }, 500, function(){
      amarillo(elemento)
    }
  )
}


function pulsoreloj(){
	  reloj = setInterval(function() { 
	  	$("#timer").text(minutos+":"+segundos)
		if(minutos==0 && segundos==0)
			final()
	
		segundos--

		if(segundos==-1){
			minutos--
			segundos=59
		}


	   }, 1000)

}

function pulsojugar(){
	intervalojuego= setInterval(function() { 
	  		if(hayrepetido){
				setTimeout(buscarrepetidos, 500)
		  		setTimeout(rellenar,1500)
		  	}


	   }, 2000)


}

function buscarrepetidos(){
	hayrepetido=false
	for (i=0 ;i<7;i++)
			for (j=0 ;j<7 ;j++)
				matriz2[i][j]=matriz[i][j]

  		for (i=0 ;i<7 ;i++)
			for (j=0 ;j<7 ;j++){
				k=0
				while(matriz[i][j+k]==matriz[i][j+k+1] && j+k+1<7){
					k++
				}
				
				if(k>=2){
					for(var z=0 ; z<=k; z++)
						matriz[i][j+z]=9
				}
				
			}


		for (j=0 ;j<7 ;j++)
			for (i=0 ;i<5 ;i++){
				k=0

				while( matriz2[i+k][j]==matriz2[i+k+1][j]&&(i+k+1)<7){
					k++
					if(i+k+1==7) break;
				}
				
				if(k>=2){
					for(var z=0 ; z<=k; z++)
						matriz2[i+z][j]=9
				}
				
			}

		for (j=0 ;j<7 ;j++)
			for (i=0 ;i<7 ;i++){
				if(matriz[i][j]==9 || matriz2[i][j]==9){
					matriz[i][j]=9
					hayrepetido=true
					puntaje=puntaje+10
					$("#score-text").text(puntaje)
				}
			}



		for (i=1 ;i<=7 ;i++)
			for (j=1 ;j<=7 ;j++){
				if(matriz[i-1][j-1]==9){
					$(".col-"+j+">.caramelo:nth-child("+i+")").toggle( "pulsate" )
						
				}
			
			}

}

function rellenar(){
	for(j=0 ; j<7; j++)
			for (i=6 ; i >=0 ; i--)
				while(matriz[i][j]==9){
					for(z=0;i-z>0; z++){
						matriz[i-z][j]=matriz[i-z-1][j]
						
					}

					
					matriz[0][j]=8
				}

		borrartablero()
		mostrar()
}
function final(){
	$(".panel-tablero").hide("slow")
	$(".time").hide()
	$("#fin").show()
	$(".panel-score").css("width" ,"100%")
	
	
	jugando=false
	clearInterval(intervalojuego)
	clearInterval(reloj)
	

}

function reiniciar(){
	hayrepetido=true
	puntaje=0
	$("#score-text").text(puntaje)

	minutos=minutosjuego
	segundos=0

	movimientos=0
	$("#movimientos-text").text(movimientos)

	$(".time").show()
	$(".panel-tablero").show("slow")
	$("#fin").hide()
	$(".panel-score").css("width" ,"25%")
	reiniciartablero()


}

function reiniciartablero(){
	for (i=0 ;i<7;i++)
			for (j=0 ;j<7 ;j++){
				matriz[i][j]=Math.floor(Math.random()*3+1)
			}
		borrartablero()
		mostrar()
}

$(function(){

$(".panel-score").prepend('<h2 class="main-titulo" id="fin"> Juego Terminado</h2>')
$("#fin").hide()

amarillo($("#titulo"))

reiniciartablero()
	


	$(".btn-reinicio").click(function(){
		
	
		if(jugando){
			pulsoreloj()
			pulsojugar()	
		
			jugando=false
			$(".btn-reinicio").text("reiniciar")
			
		}
		else{
			reiniciar()
			jugando=true
			$(".btn-reinicio").text("iniciar")
			clearInterval(intervalojuego)
			clearInterval(reloj)

		}
	

  });

  	
 

 	$(".columna").on("mousedown",".caramelo",function(){
 		console.log("clickabajo")
 		ficha1=this
 		$(".columna").on("hover",".caramelo",function(){
 			
 		});
 
  		pos1=$(".caramelo" ).index( this )
  		x1=Math.floor(pos1/7)
  		y1=pos1-7*x1
  		console.log("pos= "+pos1+" col= "+ x1+" fila= "+y1 );

  	}); 

  $(".columna").on("mouseup",".caramelo",function(){
  		console.log("clickarriba")
  		movimientos++
  		$("#movimientos-text").text(movimientos)

  		pos2=$(".caramelo" ).index( this )
  		x2=Math.floor(pos2/7)
  		y2=pos2-7*x2
  		console.log("pos= "+pos2+" col= "+ x2+" fila= "+ y2);
  		var temp= matriz[y2][x2]
  		matriz[y2][x2]=matriz[y1][x1]
  		matriz[y1][x1]=temp
  		
  		borrartablero()
  		mostrar()
  		setTimeout(buscarrepetidos, 500)
  		setTimeout(rellenar,1500)

  
  	});

});



function borrartablero(){
	$( ".caramelo" ).remove();
	console.log("borrado")
}

function vermatriz(){
	var m=""
	for (i=0 ;i<7;i++){
		m=""
			for (j=0 ;j<7 ;j++){
				m= m+matriz[i][j]
			}
				console.log(m+"-")
				
	}
				
}

function mostrar(){
	
	for (i=0 ;i<7;i++)
			for (j=0 ;j<7 ;j++){
				if(matriz[i][j]==8){

					matriz[i][j]=Math.floor(Math.random()*3+1)
					
				}
					
				
					$(".col-"+(j+1)).append("<img src='image/"+ matriz[i][j]+".png' class='caramelo'/>");
				
				
			}

	$(".caramelo").draggable({delay : 1000,})

			
}
