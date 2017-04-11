var botonFut = document.getElementById("botonSoccer");
var botonBasquetball = document.getElementById("botonBasquetball");
var botonTenis = document.getElementById("botonTenis");

var canchaFut = document.getElementById("futbol");
var canchaBasquetball = document.getElementById("basquetball");
var canchaTenis = document.getElementById("tenis");


/*var botonFutbol = document.getElementById("botonSoccer");
botonFutbol.addEventListener("click", mostrarCancha);

var removerBotonFutbol = document.getElementById("botonSoccer");
removerBotonFutbol.addEventListener("dblclick", ocultarCancha) */

function detectarBoton(event) {
 switch(event.toElement) {
   case botonFut:
   //console.log(event); Haciendo este console.log obtengo el toElement y el detail
   if (event.detail == 1) { // un click (Esto lo obtenemos al  hacer un console.log al evento click para poder encontrar este event.detail)
    mostrarCancha(canchaFut);
  } else if (event.detail == 2){ // doble click
    ocultarCancha(canchaFut);
   }
   break;

   case botonBasquetball:
   if (event.detail == 1) { // un click (Esto lo obtenemos al  hacer un console.log al evento click para poder encontrar este event.detail)
    mostrarCancha(canchaBasquetball);
  } else if (event.detail == 2){ // doble click
    ocultarCancha(canchaBasquetball);
   }
   break;

   case botonTenis:
   if (event.detail == 1) { // un click (Esto lo obtenemos al  hacer un console.log al evento click para poder encontrar este event.detail)
    mostrarCancha(canchaTenis);
  } else if (event.detail == 2){ // doble click
    ocultarCancha(canchaTenis);
   }
   break;
 }
}



function mostrarCancha (cancha) {
 cancha.style.display = "block";
 document.getElementById("texto").style.display = "none";

}

function ocultarCancha(cancha) {
cancha.style.display = "none";
}

function ocultarTexto () {
  p.style.display = "none";
}



botonFut.addEventListener("click",detectarBoton);
botonBasquetball.addEventListener("click", detectarBoton);
botonTenis.addEventListener("click", detectarBoton);
