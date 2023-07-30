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
    var cajita = "⬛";
    // Cantidad de patas
    for (var j = 0; j < cantidadDePasos; j++) {
        patitas += "🐾";
    }
    // imprimo el gato con su respectiva patitas
    // Si la iteracion es par imprimo su cajita
    if (i % 2 === 0) {
        console.log(gatos + cajita + patitas);
    } else  // en caso que no sea par no la imprimo
    {
        console.log(gatos + patitas);
    }

}