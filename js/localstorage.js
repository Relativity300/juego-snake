$(document).ready(function(){
    $('#box-form').submit(function(){
        var txt_user = $('#txt-user').val();
        var txt_password = $('#txt-password').val();

        //almacenar los valores dentro de localstorage
        localStorage.setItem('usuario',txt_user);
        localStorage.setItem('password',txt_password);
    });

    var txt_user = localStorage.getItem('usuario');
    var txt_password =localStorage.getItem('password');
    

    if(txt_user == "juan" && txt_password == '123' || txt_user == "johan" && txt_password == '123' || txt_user == "diego" && txt_password == '123' ){
        //llamamos al documento sesion.html
        localStorage.setItem("p", 0);

        localStorage.setItem("puntuacion", "contar");
        window.location = 'index.html';

    }else{

        alert("Los datos no son correctos");
    }


});

