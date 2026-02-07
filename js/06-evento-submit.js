// primero un evento usando un click

// const sendBtn = document.querySelector('.boton--primario');

// sendBtn.addEventListener('click',function(e){
//     console.log(e);
//     e.preventDefault();
//     console.log('enviando el formulario... Este es un click');
// })

// ahora con submit

const userForm = document.querySelector('.formulario');

userForm.addEventListener('submit', function(e){
    console.log(e);
    e.preventDefault();
    console.log('enviando el formulario... Este es un submit');
})

// En los fomrmularios se usa el evento submit, por qe este ejecuta el formulario

// El evento click se usa pra carritos de compras, para likes ETC.
