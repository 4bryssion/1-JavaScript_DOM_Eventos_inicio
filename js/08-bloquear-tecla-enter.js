// const button = document.querySelector('.boton');

document.querySelector('.boton').addEventListener('keydown', function(e){
    if(e.key === "Enter"){
        e.preventDefault();
        console.log('Enter bloqueado');
       
    }
});