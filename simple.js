

		function simple(){

	var p=document.getElementById("principal").value;
	var r=document.getElementById("interest").value;
	var t=document.getElementById("time").value;
	var si=0;
	var s=0;
	
	
       si=parseInt((p*r*t)/100);
       s=parseInt(+si + +p);
     
       document.getElementById('num1').innerHTML="If You deposit "+p+',';
       document.getElementById('num2').innerHTML="at an interest rate of "+r+'%';
       document.getElementById('num3').innerHTML="you will receive an amount of "+si;
       document.getElementById('num4').innerHTML="in the year "+(2020+ +t);
      
       }

       
	function slider(val)
	{
		
		
		document.getElementById("val").innerHTML=val+"%";
	}
	

	
