const result = document.querySelector('.result');

const form = document.querySelector('.formulario');
const button2 = document.querySelector('.boton');
// const button = document.querySelector('.send-data');

// Con click NO se deben enviar formularios, estos se envian con el evento submit
button2.addEventListener('click', (e) => {
    
    e.preventDefault();
    const data = new FormData(form);
    const userData = Object.fromEntries(data.entries());

    // Mostrar mensaje personalizado
    result.textContent = `Gracias ${userData.userName}, hemos recibido tu mensaje (${userData.userMessage}). Te contactaremos pronto al correo ${userData.userEmail}.`;
})