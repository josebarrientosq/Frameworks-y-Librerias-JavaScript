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


function numero(obj){
	return obj.src.substring(obj.src.length-5,obj.src.length-4)
	
}

function aparece(elemento){
	$(elemento).animate(
	{
		left: "+=100"
	}, 500, function(){
		desaparece(elemento)
	}

	)
}
function desaparece(elemento){
	$(elemento).animate(
	{
		left: "-=100"
	}, 500, function(){
		aparece(elemento)
	}

	)
}

function arriba(elemento){
  $(elemento).animate(
    {
      top: "-=10"
    }, 500, function(){
      abajo(elemento)
    }
  )
}

function abajo(elemento){
  $(elemento).animate(
    {
      top: "+=10"
    }, 500, function(){
      arriba(elemento)
    }
  )
}


function mostrar(){
	$( ".caramelo" ).detach();
	//for (j=0 ;j<7 ;j++)
	//	$(".col-"+(j+1)).empty()

	for (i=0 ;i<7;i++)
			for (j=0 ;j<7 ;j++){
				$(".col-"+(j+1)).append("<img src='image/"+ matriz[i][j]+".png' class='caramelo'/>");
				console.log(matriz[i][j])
			}

			$(".caramelo").draggable();
			arriba($(".caramelo"))

}

function borrar(){
	$( ".caramelo" ).detach();
}

$(function(){


	for (i=0 ;i<7;i++)
			for (j=0 ;j<7 ;j++){
				matriz[i][j]=Math.floor(Math.random()*3+1)
				matriz2[i][j]=matriz[i][j]
				$(".col-"+(j+1)).append("<img src='image/"+ matriz[i][j]+".png' class='caramelo'/>");

		}
		
		//mostrar()
		$(".caramelo").draggable();




/*
	$('.parpadeo').each(function() {
    var elem = $(this);
    setInterval(function() {
        if (elem.css('visibility') == 'hidden') {
            elem.css('visibility', 'visible');
        } else {
            elem.css('visibility', 'hidden');
        }    
    }, 500);
});
*/


	$(".btn-reinicio").click(function(){
		//$(this).toggle(); 
    	//$(".caramelo:last-of-type").after("<img src='image/1.png' class='caramelo'/>");
    	//$(".col-2").append("<img src='image/1.png' class='caramelo'/>");
    	
    	//console.log($(".col-1>.caramelo"))
    	/*for (var i=1 ;i<8 ;i++)
			for (var j=1 ;j<8 ;j++)
			//	console.log($(".col-"+j+">.caramelo:nth-child("+i+")").attr("src").substring(6,7)  )
				matriz[i-1][j-1]=$(".col-"+j+">.caramelo:nth-child("+i+")").attr("src").substring(6,7)
*/
		borrar()

    	

  });

  	
  $(".btn-reinicio2").click(function(){
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
				console.log(matriz[i][j])
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
				console.log(matriz[i][j])
			}

		for (j=0 ;j<7 ;j++)
			for (i=0 ;i<7 ;i++){
				if(matriz[i][j]==9 || matriz2[i][j]==9)
					matriz[i][j]=9
			}



		for (i=1 ;i<=7 ;i++)
			for (j=1 ;j<=7 ;j++){
				if(matriz[i-1][j-1]==9){
					arriba($(".col-"+j+">.caramelo:nth-child("+i+")"))
				}
				//console.log(matriz[i-1][j-1])
				//console.log($(".col-"+j+">.caramelo:nth-child("+i+")"))
			}
  });

  
	//for (var i=1 ;i<8 ;i++)
	//	for (var j=1 ;j<8 ;j++){
	//		$(".col-"+i).append("<img src='image/"+ Math.floor(Math.random()*3+1)+".png' class='caramelo'/>");
			//$("<img src='image/"+ Math.floor(Math.random()*3+1)+".png' class='caramelo'/>").appendTo(".col-"+i); 
	//	}

		
	//	$(".caramelo").droppable({accept: ".caramelo" });

 	$(".caramelo").mousedown(function(){
 		ficha1=this
 	//	temporal=ficha1.clone();
  		//console.log($(ficha1).parent())
  		pos1=$(".caramelo" ).index( this )
  		x1=Math.floor(pos1/7)
  		y1=pos1-7*x1
  		console.log("pos= "+pos1+" col= "+ x1+" fila= "+y1 );
  		//$(this).toggle();  
  	}); 

  $(".caramelo").mouseup(function(){
  		pos2=$(".caramelo" ).index( this )
  		x2=Math.floor(pos2/7)
  		y2=pos2-7*x2
  		console.log("pos= "+pos2+" col= "+ x2+" fila= "+ y2);
  		var temp= matriz[y2][x2]
  		matriz[y2][x2]=matriz[y1][x1]
  		matriz[y1][x1]=temp
  		
  		mostrar()
  		
  	//	ficha2.after(ficha1);
  	//	$(".caramelo").css( "top", "0" );
  		//ficha1.css( "top", "0" )

  	//	ficha2.replaceWith(temporal)
  	//	$(this).toggle();  
  	});

});
