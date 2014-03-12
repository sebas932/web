
// Punto 1

function puntoUnoDeshabilitar(){
  
  var deshabilitar = document.getElementById("primerBoton");

  deshabilitar.disabled = true;
}  

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

function puntoDosGetDatos(){
  
  var form1 = document.getElementsByClassName('form1');
  var html = "";
  for (var i=0; i<form1.length; i++) {
    var value = form1[i].value;
    var id = form1[i].id;
    html += (id+": "+value+"<br>");
  }
  var datos= document.getElementById("datos");

  datos.innerHTML=html;
} 

// Punto 3


function puntoTresDeshabilitar(){
  var state = document.getElementById("state");
  state.disabled=true;
}

function puntoTresHabilitar(){
  var state = document.getElementById("state");
  state.disabled=false;
}


// Punto 4

function puntoCuatroCopiar(){
  var nombre = document.getElementById("nombre").value;
  var nombre2 = document.getElementById("nombre2").value;
  var dir = document.getElementById("dir").value;
  var email = document.getElementById("email").value;

  document.getElementById("cnombre").value = nombre;
  document.getElementById("cnombre2").value = nombre2;
  document.getElementById("cdir").value = dir;
  document.getElementById("cemail").value = email;

}