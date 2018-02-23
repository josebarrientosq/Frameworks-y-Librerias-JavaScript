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
var k=0

function numero(obj){
	return obj.src.substring(obj.src.length-5,obj.src.length-4)
	
}

$(function(){

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
		for (var i=0 ;i<7;i++)
			for (var j=0 ;j<7 ;j++){
				matriz[i][j]=Math.floor(Math.random()*3+1)
				$(".col-"+(j+1)).append("<img src='image/"+ matriz[i][j]+".png' class='caramelo'/>");

		}

    	

  });

  	
  $(".btn-reinicio2").click(function(){
  		for (var i=0 ;i<7 ;i++)
			for (var j=0 ;j<7 ;j++){
				k=0
				while(matriz[i][j+k]==matriz[i][j+k+1] && j+k+1<7){
					k++
				}
				
				if(k>=2){
					for(var z=0 ; z<=k; z++)
						matriz[i][j+z]=9
				}
				//console.log(matriz[i][j])
			}

		for (var i=1 ;i<=7 ;i++)
			for (var j=1 ;j<=7 ;j++){
				if(matriz[i-1][j-1]==9){

					$(".col-"+j+">.caramelo:nth-child("+i+")").toggle("bounce",30000)
				}
				console.log(matriz[i-1][j-1])
			}



  });
	//for (var i=1 ;i<8 ;i++)
	//	for (var j=1 ;j<8 ;j++){
	//		$(".col-"+i).append("<img src='image/"+ Math.floor(Math.random()*3+1)+".png' class='caramelo'/>");
			//$("<img src='image/"+ Math.floor(Math.random()*3+1)+".png' class='caramelo'/>").appendTo(".col-"+i); 
	//	}

		$(".caramelo").draggable();
	//	$(".caramelo").droppable({accept: ".caramelo" });

 	$(".caramelo").mousedown(function(){
 		ficha1=this
 	//	temporal=ficha1.clone();
  		//console.log(numero(ficha1))
  		//$(this).toggle();  
  	}); 

  	$(".caramelo").mouseup(function(){
  		ficha2=this
  		
  		
  		ficha2.after(ficha1);
  		$(".caramelo").css( "top", "0" );
  		//ficha1.css( "top", "0" )

  	//	ficha2.replaceWith(temporal)
  	//	$(this).toggle();  
  	});

});
