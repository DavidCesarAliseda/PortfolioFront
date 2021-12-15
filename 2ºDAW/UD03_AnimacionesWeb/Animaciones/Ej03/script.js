window.onload = inicio();

function inicio() {

    let titulo = document.getElementsByTagName("pre")[0];
    titulo.innerHTML = titulo.innerHTML.replace(/░/g, '<span>░</span>')

    titulo.innerHTML = titulo.innerHTML.replace(/▒/g, '<span>▒</span>')

    titulo.innerHTML = titulo.innerHTML.replace(/▓/g, '<span>▓</span>')
}