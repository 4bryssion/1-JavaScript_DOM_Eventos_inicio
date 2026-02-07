// Eventos

// Click de raton del usuario sobre un elemento
// Pulsacion de una tecla especifica del teclado
// Reproduccion de un archivo de audio/video
// Scroll del mouse sobre un elemento
// El usuario ha activado la opcion de "Imprimir una pagina"

console.log(1);

// La funcion que esta en la siguiente linea se le conoce como callback, ya que se ejecuta cuando el evento ocurre.
window.addEventListener('load', function() {
    // Archivos que dependen que el HTML esten listo
    console.log(2)
    console.log('El DOM ha sido cargado');
});

// Otra forma  de hacer lo mismo

window.onload = function() {
    console.log(3);
    console.log('El DOM ha sido cargado 2');
};

console.log(4);


document.addEventListener('DOMContentLoaded', function() {
    console.log('El DOM ha sido completamente cargado y analizado');
});

// En este sentido se ejecuta el 1 y el 4 primero, luego el 2 y 3 cuando el DOM ha sido cargado, por ultimo carga el documento.

// La moraleja es que de manera general se debe usar docoument.addEventListener('DOMContentLoaded', function() { ... }); para asegurar que el DOM este listo antes de manipularlo con JavaScript.

window.addEventListener('load', print);

function print() {
    console.log('Esta es una funcion extnera')
}

window.onscroll = function() {
    console.log('Estas haciendo scroll en la pagina');
}

