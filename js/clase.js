/*
var person = {
  firstname: "sebastian",
  lastname: "amariles",
  id: 123
};

person = new Object();

person.firstname = "sebastian"
*/

var person = new person("sebas","amariles",21,"blue");


console.log("Nombre :"+person.getName());

function copiar(){
  var texto1= document.getElementById("texto1");
  var texto2= document.getElementById("texto2");

  texto2.innerHTML=texto1.innerHTML;
}

function person(fname,lname,age,c){
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.c = c;
  this.getName = getName;
  function getName(){
    return fname+" "+lname;
  }
}