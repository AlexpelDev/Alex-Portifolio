const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

window.addEventListener('scroll', () =>{
    if(window.scrollY > 100){
        nav.classList.add('nav-scrolled');
    }else{
        nav.classList.remove('nav-scrolled');
    }
});
const textoParaDigitar = "Olá, eu sou Alex!";
const h1Digitando = document.getElementById('titulo-digitando');
let index = 0;

function escreverTexto() {
    if (index < textoParaDigitar.length) {
        h1Digitando.textContent += textoParaDigitar.charAt(index);
        index++;
        setTimeout(escreverTexto, 100); // Ajuste a velocidade da digitação (ms)
    }
}

document.addEventListener('DOMContentLoaded', escreverTexto);