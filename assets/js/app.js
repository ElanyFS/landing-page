document.addEventListener('DOMContentLoaded', function () {
    let anoAtual = new Date().getFullYear();
    document.querySelector('#ano').textContent = anoAtual;
})