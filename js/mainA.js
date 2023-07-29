    //-------------------------------EJER A:---------------------------------

    // Datos a pedir: 
    var cantidadDeGatos = prompt('Ingrese la cantidad de gatitos a imprimir: ');
    cantidadDeGatos = parseInt(cantidadDeGatos);

    // emojis gatos
    var gatos = ["😺", "😸", "😹"];

// Bucle para imprimir los gatos con los emojis intercambiados
for (var i = 1; i <= cantidadDeGatos; i++) {
    // Pos del gato
  var posGato = (i - 1) % gatos.length; 
  // Utilizo para poner su indice y obeter emoji

  var emoji = gatos[posGato]; 
  // Imprimo el emoji actual
  console.log("Gato #" + i + ": " + emoji);
}