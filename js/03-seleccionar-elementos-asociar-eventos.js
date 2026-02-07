// // Seleccionar elementos y asociar eventos


// Identificar cuando el DOM esta listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('200 OK')
})

// // Seleccionar la clase .boton--primario y asignarla a una variable
// const sendBtn = document.querySelector('.boton--primario')

// // Se escucha el evento click y se ejecuta el callback
// sendBtn.addEventListener('click', function(e) {
//     // Esta linea evita que la pagina se recargue
//     e.preventDefault()
//     console.log('Diste click en el botón Enviar')
// })


// Verificar si es null

const sendBtn = document.querySelector('.boton--primario')
// console.log(sendBtn)

if(sendBtn){
    sendBtn.addEventListener('click', function(e){
        e.preventDefault();
        console.log("Enviando Formulario...")
    })
} else {
    console.log("Error, el boton no existe.")
}