// Este codigo permite numeros y bloquea letras 

document.querySelector(".campo__field.campo__field--user-phone").addEventListener("keydown",(e) => {

    if(
        e.key === "Backspace" ||
        e.key === "Tab" ||
        e.key === "Enter" ||
        e.key === "ArrowLeft" ||
        e.key === "AllowRight" 
    ){
        return; // No bloqueamos estas teclas 
    };

    //Bloqueamos teclas que NO son numeros 

    if(e.key< "0" || e.key > "9"){

        e.preventDefault();
        console.log("Solo se permiten numeros");

    }

});