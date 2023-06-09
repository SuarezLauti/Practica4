function borrar() {
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("resultado").innerHTML = "";
}
function calcular() {
  var num1 = document.getElementById("n1").value;
  var num2 = document.getElementById("n2").value;
  var operaciones = document.getElementById("operaciones").value;
  var result;

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (isNaN(num1) || isNaN(num2)) {
    alert("No se pueden sumar letras");
    return;
  }
  if (operaciones == "prom1") {
    result = num1 + num2 - 500;
  }
  if (operaciones == "prom2") {
    result = num1 + num2 - 800;
  }
  if (operaciones == "prom3") {
    result = num1 + num2 - 1200;
  }
  if (operaciones == "prom4") {
    result = num1 + num2 - 1600;
  }
  document.getElementById("resultado").innerHTML = +result;
}
function mayor() {
  var nombre1 = document.getElementById("nombre1").value;
  var megas1 = document.getElementById("megas1").value;
  var nombre2 = document.getElementById("nombre2").value;
  var megas2 = document.getElementById("megas2").value;
  var mensaje;

  edad1 = parseInt(megas1);
  edad2 = parseInt(megas2);

  console.log(megas1);
  console.log(megas2);

  if (isNaN(megas1) || isNaN(megas2)) {
    alert("No exixte edad con letra");
    return;
  }
  if (megas1 > megas2) {
    mensaje = nombre1 + "Le ofrece mejor servicio";
  } else if (megas2 > megas1) {
    mensaje = nombre2 + "Le ofrece mejor servicio";
  } else {
    mensaje = "Tienen la misma OFERTA";
  }

  document.getElementById("mensaje").innerHTML = +mensaje;
}
function borrar1() {
  document.getElementById("nombre1").value = "";
  document.getElementById("megas1").value = "";
  document.getElementById("nombre2").value = "";
  document.getElementById("megas2").value = "";
  document.getElementById("mensaje").innerHTML = "";
}
function verificar() {
  var opcion1 = document.getElementById("FIBRA").checked;
  var opcion2 = document.getElementById("TELEFONO").checked;
  var opcion3 = document.getElementById("CELULAR").checked;
  if (opcion1 && opcion2 && opcion3) {
    alert("Seleccionaste mas de dos");
  }
}
