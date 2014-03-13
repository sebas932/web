var validado,msj;
function validarFormulario(id){
  $(id).append( "<p id='textoinfo'></p>" );  
  $(id+" input:submit").click(function(e) {
    msj = "";
    e.preventDefault();
    validado = true; 
    $("#textoinfo").html("correcto")
    $(id+" [type^='text'], [type^='checkbox'], [type^='email'], [type^='password'], select").each( function(index, value) {
         var rules  = new getRules(this);

         if (rules.max) validarMax(this);
         if (rules.min) validarMin(this);
         if (rules.number) validarnumber(this);
         if (rules.required) validarRequerido(this);
         if($(this).attr("type") == "email" ) validarEmail(this);
         if($(this).attr("type") == "checkbox" ) validarCheckbox(this);

    });
    if (!validado) $("#textoinfo").html(msj);
 });
}


// Funciones para obtener reglas de validacion
function getRules(input){ 
    var inputattr ={
        id : input.id,
        max : hasMax(input),
        min : hasMin(input),
        number: hasNumber(input),
        required: hasRequired(input)
    }
    return inputattr;
}

function hasMax(input){
    return ($(input).attr("max"))? $(input).attr("max") : false;   
}
function hasMin(input){
    return ($(input).attr("min"))? $(input).attr("min") : false;   
}
function hasNumber(input){
    return ($(input).attr("number"))? true : false;   
}
function hasRequired(input){
    return ($(input).attr("required"))? true : false;   
}


// Funciones para Validar campos
function validarMax(input){
    if($(input).val().length > $(input).attr("max") ) error("Maximo de caracteres ("+$(input).attr("max")+") permitidos  ",input);
}
function validarMin(input){
    if($(input).val().length < $(input).attr("min") ) error("Minimo de caracteres ("+$(input).attr("min")+") permitidos  ",input);
}

function validarRequerido(input){
   if($(input).val() == 0 ) error("Este campo es obligatorio ",input);
}

function validarnumber(input){
   if(!$.isNumeric( $(input).val() ) ) error("Este campo es debe ser numerico ",input);
}

function validarEmail(input) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if(!emailReg.test($(input).val())) error("Este campo debe tener un mail correcto ",input);
    
}

function validarCheckbox(input){
   if(!$(input).is(':checked')) error("Este campo es obligatorio ",input);
}

function error(mensaje,input){
    console.log("Error: "+mensaje+" ->"+$(input).attr("id")); 
    msj +=  "Error: "+mensaje+" ->"+$(input).attr("id") +"<br>";
    validado = false;
}


