console.log("Main Jquery");
$( document ).ready(function() {
  jQuery.validator.setDefaults({
	debug: true,	
	success: "valid"
  });	

  $("#formulario").validate({
  	success: function(label) {
				label.text("Correcto !").addClass("success");
	},
	rules: {
	  tel: {
	    required: true,
      	number: true
	   }
	  }
  });
});
