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
    
    let nombre0="juan";
    let nombre1="johan";
    let nombre2="diego";
    let nombre3="pedro";
    let nombre4="laura";
    let nombre5="andres";
    let nombre6="pepe";
    let nombre7="lolaloca";

    if(txt_user == nombre0 && txt_password == '123' || txt_user == nombre1 && txt_password == '123' || txt_user == nombre2 && txt_password == '123' || txt_user == nombre3 && txt_password == '123'|| txt_user == nombre4 && txt_password == '123'|| txt_user == nombre5 && txt_password == '123'|| txt_user == nombre6 && txt_password == '123'|| txt_user == nombre7 && txt_password == '123' ){
        //llamamos al documento sesion.html
        localStorage.setItem("p", 0);

        localStorage.setItem("puntuacion", "contar");
        window.location = 'index.html';

    }else{

        alert("Los datos no son correctos");
    }


});

