// Generar HTML desde JS
// Por ejemplo cuando realizamos una compra en una platqaforma online, ese productos se agrega al carrito de compras.


// Cuando se crea un nuevo elemento en JS se recomienda crear las etiquetas en mayusculas y sin apertura y sin cierre de etiquetas. 
const newLink = document.createElement('A'); 
console.log(newLink);

newLink.href = 'new-link.hmtl.js'

newLink.textContent = 'A new link';

newLink.classList.add('navegacion_enlace');

// Agregar este link al documento

const navigation = document.querySelector('.navegacion');
navigation.appendChild(newLink);
