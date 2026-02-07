const userForm = document.querySelector('.formulario');
const footer = document.querySelector('.footer');

userForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    const data = new FormData(userForm);
    const userData = Object.fromEntries(data.entries());

    // Mostrar datos en consola
    console.log('Todos los datos del usuario: ', userData)
    console.log('Nombre de usuario: '+ userData.userName)
    console.log('Correo del usuario: ' + userData.userEmail)
    console.log('Mensaje del usuario: ' + userData.userMessage)

    const result = document.querySelector('.result');

    result.classList.add('result');
    result.textContent = `Gracias ${userData.userName}, hemos recibido tu mensaje (${userData.userMessage}). Te contactaremos pronto al correo ${userData.userEmail}.`;

    // inserta el resultado antes del footer
    document.body.insertBefore(result, footer);

    // inserta el resultado despues del footer
    footer.insertAdjacentElement('afterend', result);
})

