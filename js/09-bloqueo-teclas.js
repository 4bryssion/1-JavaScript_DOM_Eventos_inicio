
document.querySelector('.formulario').addEventListener('keydown', function(e){
    if(e.key === "a" || e.key === "A"){
        e.preventDefault();
       console.log(`La tecla (A) esta bloqueada`);
    } else if(e.key == "b" || e.key === "B"){
        e.preventDefault();
        console.log('La tecla (B) esta bloqueada');
    }
});     