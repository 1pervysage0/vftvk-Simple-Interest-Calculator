

		function simple(){

	var p=document.getElementById("principal").value;
	var r=document.getElementById("interest").value;
	var t=document.getElementById("time").value;
	var si=0;
	var s=0;
	
	
       si=parseInt((p*r*t)/100);
       s=parseInt(+si + +p);
     
       document.getElementById('num1').innerHTML="simple interest:"+si+" and total amount will be "+s;
      
       }
	
	

	
