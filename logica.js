function ocultarSegundaPantalla() {
    var cuadrotextarea = document.getElementById("cuadro-codificador");
    var copiar = document.querySelector(".copiar");
    var mensaje = document.getElementById("mensaje");

    if(cuadrotextarea.value.trim()== ""){
        copiar.style.visibility = "hidden";
        mensaje.style.visibility = "hidden";
    } else {
        copiar.style.visibility = "visible";
        mensaje.style.visibility = "visible";
    }
}
function ocultarElementos() {
    var cuadroCodificador = document.getElementById("cuadro-codificador");
    var imagen = document.querySelector(".muñeco");
    var parrafo1 = document.querySelector(".p1-bloque2");
    var parrafo2 = document.querySelector(".p2-bloque2");
    if (cuadroCodificador.value.trim() == "") {
        imagen.style.visibility = "visible";
        parrafo1.style.visibility = "visible";
        parrafo2.style.visibility = "visible";
    } else {
        imagen.style.visibility = "hidden";
        parrafo1.style.visibility = "hidden";
        parrafo2.style.visibility = "hidden";
    }
}

function copyText() {
    var mensajeTextarea = document.getElementById("mensaje");
    mensajeTextarea.select();
    mensajeTextarea.setSelectionRange(0, mensajeTextarea.value.length);
  
    navigator.clipboard.writeText(mensajeTextarea.value)
      .then(function() {})
    mensajeTextarea.blur();
  }

document.querySelector(".copiar").style.visibility = "hidden";
document.getElementById("mensaje").style.visibility = "hidden";
var botonCodificador = document.querySelector(".botonCodificador");
var botonDescodificador = document.querySelector(".botonDescodificador");
var botonCopiar = document.querySelector(".copiar");

botonCodificador.addEventListener("click", function() {
    
    var cuadroCodificador = document.getElementById("cuadro-codificador");
    var oracion = cuadroCodificador.value;
    var letras = oracion.split(""); 
   
    for (let cambio = 0; cambio < letras.length; cambio++) {
        if (letras[cambio] == "a"){
            letras[cambio] = "ai";
        } 
        else if (letras[cambio] == "e") {
            letras[cambio] = "enter";
        }
        else if (letras[cambio] == "i") {
            letras[cambio] = "imes";
        }
        else if (letras[cambio] == "o") {
            letras[cambio] = "ober";
        }
        else if (letras[cambio] == "u") {
            letras[cambio] = "ufat";
        }
    }
    ocultarSegundaPantalla();
    ocultarElementos();
    cuadroCodificador.value = "";
    var texto = letras.join("");
    document.getElementById("mensaje").textContent = texto;
    
});

botonDescodificador.addEventListener("click", function() {
    
    var cuadroCodificador = document.getElementById("cuadro-codificador");
    var oracion = cuadroCodificador.value;
    var letras = oracion; 

    for (let cambio = 0; cambio < letras.length; cambio++) {
        if (letras[cambio] == "a" && letras.substring(cambio, cambio + 2) === "ai") {
            letras = letras.replace("ai", "a");
        } 
        else if (letras[cambio] == "e" && letras.substring(cambio, cambio + 5) === "enter") {
            letras = letras.replace("enter", "e");
        }
        else if (letras[cambio] == "i" && letras.substring(cambio, cambio + 4) === "imes") {
            letras = letras.replace("imes", "i");
        }
        else if (letras[cambio] == "o" && letras.substring(cambio, cambio + 4) === "ober") {
            letras = letras.replace("ober", "o");
        }
        else if (letras[cambio] == "u" && letras.substring(cambio, cambio + 4) === "ufat") {
            letras = letras.replace("ufat", "u");
        }
    }
    ocultarSegundaPantalla();
    ocultarElementos();
    cuadroCodificador.value = "";
    document.getElementById("mensaje").textContent = letras;
});

botonCopiar.addEventListener("click", function() {
    copyText();
});