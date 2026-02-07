const keysLocked = ["a", "A", "b", "B"];

// Select all the fields

document.querySelectorAll(".campo__field").forEach(field => {
    field.addEventListener("keydown", function(e){
        if(keysLocked.includes(e.key)){
            e.preventDefault();
            console.log(`The key "${e.key}" is locked.`);
        }
    });
});