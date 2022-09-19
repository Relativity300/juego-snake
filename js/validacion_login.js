let nombre=document.querySelector("#usuario");
let password=document.querySelector("#password");
let boton=document.querySelector("#button");




boton.addEventListener('click',()=>{

    if (nombre.value.length==0 && password.value.length==0) {
        alert("degaste todos los canpo vacio");
    }
    else if (password.value.length==0) {
        alert("degaste el canpo de password vacio");
    }
    else if (nombre.value.length==0 ) {
        alert("degaste el canpo de nombre vacio");
    }
})