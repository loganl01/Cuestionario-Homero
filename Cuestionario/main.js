document.getElementById('boton').addEventListener('click', () => {
    let suma = 0;

    if (document.getElementById("Jay").checked) suma++;
    if (document.getElementById("Planta").checked) suma++;
    if (document.getElementById("fam1").checked) suma++;
    if (document.getElementById("Donas").checked) suma++;
    if (document.getElementById("Saxofón").checked) suma++;
    if (document.getElementById("TabMoe").checked) suma++;
    if (document.getElementById("Barney").checked) suma++;
    if (document.getElementById("Burns").checked) suma++;
    if (document.getElementById("PyD").checked) suma++;
    if (document.getElementById("Amor").checked) suma++;

    localStorage.setItem('miPuntaje', suma);

    window.location.href = "../FinCuestionario/index.html";
});