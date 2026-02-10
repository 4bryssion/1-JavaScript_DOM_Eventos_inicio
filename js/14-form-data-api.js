// Enviando un formulario con FormData API

const userForm = document.querySelector(".formulario");
const footer = document.querySelector(".footer");

userForm.addEventListener('submit', function(e){

    e.preventDefault(); // No recarga la página

    const data = new FormData(userForm);
    const userData = Object.fromEntries(data.entries()); // Estas 2 líneas coger el formulario y traer todos los datos.

    // console.log(`Los datos del usuario son: ${userData}`);
    // console.log("Los datos del usuario son: ", userData);

    const {userName, userPhone, userEmail, userMessage} = userData;
    // console.log("Este es mi nombre: ", userName);
    // console.log("Este es mi telefono: ", userPhone);

    const result = document.createElement('P');

    result.classList.add('result');

    result.textContent = `Hola ${userName}, tu número telefonico es ${userPhone}, tu correo electrónico es ${userEmail}, el mensaje que nos dejaste es: ${userMessage}`

    // Insertar antes del footer
    document.body.insertBefore(result, footer);

    // Insertar después del footer
    // footer.insertAdjacentElement('afterend', result);

    // Validación básica 
    if (userName === '' || userEmail === '' || userPhone === '' || userMessage === '') {
        showAlerts(showError, "Todos los campos son obligatorios.")
        return;
    } else{
        showAlerts(showCorrect, "Los datos fueron enviados correctamente...")
    }
})

// Función para mostrar error

function showError(message){
    const error = document.createElement('P');
    error.textContent = message;
    error.classList.add('error')

    userForm.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 1500);
};

function showCorrect(message){
    const showCorrect = document.createElement('P');
    showCorrect.textContent = message;
    showCorrect.classList.add('showCorrect')

    userForm.appendChild(showCorrect);

    setTimeout(() => {
        showCorrect.remove();
    }, 1500);
};

// Refactorización
