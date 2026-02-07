//Bloquear numeros en un campo de texto 

document.querySelector(".campo__field--user-name").addEventListener("keydown", 
function(e){
    if(e.key >="0" && e.key <= "9"){
        e.preventDefault();
        console.log("Numeros bloqueados");
    }
})