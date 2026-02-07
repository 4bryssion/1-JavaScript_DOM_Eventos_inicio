// console.log('Todo funcionando OK');

// Formas mas comunes de seleccionar contenidos 

// 1. querySelector - Forma Moderna 
// Retorna nigun o hasta un elemento que concida con el selector que estoy escribiendo, es muy similar al css, si voy a usar una clase inicio con un punto(.) y si es un id inicio con numeral(#)

// Si deseo ver todas las clases o etiquetas que coincidan, se utiliza querySelectorAll('.clase o etiqueta') - tambien es una forma moderna
// const heading = document.querySelectorAll('a');
// console.log(heading);

// 2. getElementById - Forma Antigua
// const heading2 = document.getElementById('myH2');
// console.log(heading2);

// De esta manera se cambia el contenido de la etiqueta 
// heading.textContent = 'Nuevo Heading desde JS';

const heading = document.querySelector('.header__texto h2');
// console.log(heading);

// Cambiar el contenido del heading
heading.textContent = 'Nuevo Heading';
// Agregar una nueva clase al heading
heading.classList.add('nueva-clase');
// Remover una clase del heading
heading.classList.remove('no-margin');

// Si el elemento NO existe, la consola me muestra un valor NULL
// Con QuierySelector muestra el primer elemento encontrado
// const heading = document.querySelectorAll('.navegacion a');
// console.log(heading);

// Me muestra solo el ultimo elemento encontrado del arreglo de enlaces
const links = document.querySelectorAll('a');
// console.log(links[0, 1, 2]);

// Modificar el texto del enlace
// links[1].textContent = 'Ustedes';

// Modificar el link en el que funciona este enlace
links[1].href = 'https://www.google.com';

// Agregar una clase al enlace
links[1].classList.add('nueva-clase');

// Remover una clase 
links[1].classList.remove('navegacion__enlace');
