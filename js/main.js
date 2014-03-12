$( document ).ready(function() {
  //Clase Jquery
  $( "input" ).click(function() {
       $("p").hide();
  });

	// Punto 1
   	$( "#punto1 #deshabilitar" ).click(function() {
  		 $( "#punto1 #primerBoton" ).attr("disabled", true);
	});

	// Punto 2
	$( "#punto2 #getDatos" ).click(function() {
  		  	var inputs = $( "#punto2 input[type='text']" );
  		  	var html = "";
  		  	inputs.each(function(i, v) {
		      var id = $(v).attr("id");
		      var value = $(v).val();
		      html += (id+": "+value+"<br>");
		    });
		    $( "#punto2 #datos" ).html(html);
	});

	// Punto 3
	$( "#punto3 #deshabilitar" ).click(function() {
   		$("#punto3 #state").attr("disabled", true);
	});
	$( "#punto3 #habilitar" ).click(function() {
   		$("#punto3 #state").attr("disabled", false);
	});
   	$( "#punto3 #toggle" ).click(function() {
   		var state = $("#punto3 #state");  
   		state.prop('disabled', function (_, val) { 
   			return ! val; 
   		});  
	});

	// Punto 4
	$( "#punto4 #form1 #copiar" ).click(function() {
  		var nombre = $( "#punto4 #form1 #nombre" ).val();
  		var nombre2 = $( "#punto4 #form1 #nombre2" ).val();
  		var dir = $( "#punto4 #form1 #dir" ).val();
  		var email = $( "#punto4 #form1 #email" ).val();

  		$( "#punto4 #form2 #nombre" ).val(nombre);
  		$( "#punto4 #form2 #nombre2" ).val(nombre2);
  		$( "#punto4 #form2 #dir" ).val(dir);
  		$( "#punto4 #form2 #email" ).val(email);	
	});

});