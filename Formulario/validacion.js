
function validacion(){
    var nombre=document.getElementById("name").value;
    var correo=document.getElementById("email").value;
    var celular=document.getElementById("celular").value;
    var pais=document.getElementById("pais").value;
    var fecha=document.getElementById("fecha_nacimiento").value;
    var video=document.getElementById("video").value;
    var imagen=document.getElementById("imagen").value;

    if(nombre.length == 0 || email.length==0 || celular.length==0 || pais.length==0 || fecha.length==0 || video.length==0 || imagen.length==0){
        alert("Campo Obligatorio");
        return false;
    } 
    else if( /^\s+$/.test(nombre)){
        alert("[ERROR] Debe elegir nombre valido");
        return false;
    }
    else if ( /^\d{9}$/.test(celular)) {
        alert('[ERROR] Debe elegir numero valido');
        return false;
    }
    else if ( !(/\S+@\S+\.\S+/.test.test(correo))) {
        alert('[ERROR] Debe elegir correo valido');
        return false;
    }
    else if ( !isNaN(fecha)) {
        alert('[ERROR] Debe elegir fecha valida');
        return false;
    }
    else if (/^\s+$/.test(pais)) {
        alert('[ERROR] Debe elegir pais valido');
        return false;
    }
    
    
}