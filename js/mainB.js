// Inicializo las variables a 0
var cantidadDeGatos = 0;
var cantidadDePasos = 0;

// Peticiones de datos:
var cantidadDeGatos = prompt('Ingrese la cantidad de gatitos a imprimir: ');
cantidadDeGatos = parseInt(cantidadDeGatos);

var cantidadDePasos = prompt('Ingresar la cantidad de cantidad de patas para cada gato: ');
cantidadDePasos = parseInt(cantidadDePasos);

// For general

// Cant de gatos:
for (var i = 1; i <= cantidadDeGatos; i++) {
    var gatos = `Gato #${i}: 🐈 `;
    var patitas = "";
    // Cantidad de patas
    for (var j = 0; j < cantidadDePasos; j++) {
      patitas += "🐾";
    }
    // imprimo el gato con su respectiva patitas
    console.log(gatos + patitas);
  }





















