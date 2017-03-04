//creando mi funcion para errores
 function error(){
   alert("Cometio un error");
 }

function validateForm(){
//Obteniendo los valores ingresados
var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastname").value;
var email = document.getElementById("input-email").value;
var contraseña= document.getElementById("input-password").value;

//condiciones
var letras =/([A-Z]{1}[a-z]+)|\s([A-Z]{1}[a-z]*)$/ ;
var num=/^\d{6,}$/;
var corrreo= /^(\w+\w-\d*)*\@[a-z]+\.[a-z]{2,3}$/;

//validando nombre y apellido

  if(letras.test(nombre) && letras.test(apellido) && corrreo.test(email) && num.test(contraseña)){
    if(letras.test(nombre)== false||letras.test(apellido)==false){
      alert("Ingresar datos con la primera letra Mayuscula y solo un espacio entre letras."+"<br>"+"Por favor");
    }
  }
  else {
    error();
  }

}
