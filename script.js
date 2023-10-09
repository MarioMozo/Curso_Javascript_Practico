console.log('Iniciando script en Javascript');
//h1 { color: red} sintaxis parecida a css
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const claseParrafo = document.querySelector('claseParrafo');
const parrafo = document.querySelector('parrafo');
const input = document.querySelector('input')

console.log(input.value );

console.log({
    h1,
    p,
    claseParrafo,
    parrafo
});

h1.innerHTML = 'Hola mundo';
h1.innerText = 'Hola mundo 2';

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = "42342"

const img = document.createElement('img');
img.setAttribute('src', './img/moto.jpg');
console.log(img);

parrafo.append(img)