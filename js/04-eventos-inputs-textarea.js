// Eventos de los inputs y los text area

// Esto es muy importante ya que cuando tenemos los formularios se hacen necesario vlidar, lo que el usuario esta escribiendo.

// Metodologia BEM 


// // Validacion en tiempo real
// userName.addEventListener('input', function(e){
//     // Leer lo que el usuairo ingresa
//     console.log(e.target.value);
// })
// // Validacion en tiempo real
// userEmail.addEventListener('input', function(e){
    //     // Leer lo que el usuairo ingresa
    //     console.log(e.target.value);
// })
// // Validacion en tiempo real
// userMessage.addEventListener('input', function(e){
//     // Leer lo que el usuairo ingresa
//     console.log(e.target.value);
// })
// =====================================================
const userData = {
    userName: '',
    userEmail: '',
    userMessage: ''
}
const userName = document.querySelector('.campo__field--user-name');
const userEmail = document.querySelector('.campo__field--user-email');
const userMessage = document.querySelector('.campo__field--user-message');

userName.addEventListener('input', readText);
userEmail.addEventListener('input', readText);
userMessage.addEventListener('input', readText);



function readText(e){
    if(e.target.classList.contains('campo__field--user-name')){
        userData.userName = e.target.value
    } else if(e.target.classList.contains('campo__field--user-email')){
        userData.userEmail = e.target.value
    } else if(e.target.classList.contains('campo__field--user-message')){
        userData.userMessage = e.target.value
    }

    console.log(userData)
}


// =====================================================

