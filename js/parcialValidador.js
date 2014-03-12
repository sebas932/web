$(document).ready(function() {

  validarFormulario("#formulario");
});



function validarFormulario(id){
  $(id+" input:submit").click(function(e) {
    e.preventDefault();
    
    
    $(id+" [type^='text']").each( function(index, value) {
         console.log(value.id);
    });
    $(id+" [type^='checkbox']").each( function(index, value) {
         console.log(value.id);
    });
    $(id+" [type^='email']").each( function(index, value) {
         console.log(value.id);
    });
    $(id+" [type^='password']").each( function(index, value) {
         console.log(value.id);
    });
    $(id+" select").each( function(index, value) {
         console.log(value.id);
    });

 });
}