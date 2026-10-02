window.onload = function() {

    let puntajeFinal = localStorage.getItem('miPuntaje');

    let elementoResultado = document.getElementById("Resultado");
    
    if (elementoResultado) {
        elementoResultado.textContent = puntajeFinal;
    }
};