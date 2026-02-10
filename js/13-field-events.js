const userName = document.querySelector(".campo__field--user-name");
const userPhone = document.querySelector(".campo__field--user-phone");
const userEmail = document.querySelector(".campo__field--user-email");
const userMessage = document.querySelector(".campo__field--user-message");

// userName.addEventListener("input", (e) => {
//     console.log(e.target.value);
// })

// userPhone.addEventListener("input", (e) => {
//     console.log(e.target.value);
// })

// userEmail.addEventListener("input", (e) => {
//     console.log(e.target.value);
// })

// userMessage.addEventListener("input", (e) => {
//     console.log(e.target.value);
// })

// REFACTORING

// Validacion en tiempo real

function readText (e){
    console.log(e.target.value)
}

userName.addEventListener("input", readText)
userPhone.addEventListener("input", readText)
userEmail.addEventListener("input", readText)
userMessage.addEventListener("input", readText)