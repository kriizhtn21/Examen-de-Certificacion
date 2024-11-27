function hola(){
    alert ('Inicio de Sesión exitoso')
}


const boton = document.getElementById('btn');
const boton2 = document.getElementById('btn-2');
const boton3 = document.getElementById('btn-3');


boton.addEventListener('click', function() {
    boton.style.backgroundColor = 'red';
})
boton2.addEventListener('click', function() {
    boton2.style.backgroundColor = 'red';
})
boton3.addEventListener('click', function () {
    boton3.style.backgroundColor = 'red';
})


function noDisponible() {
    document.getElementById('btn').innerHTML = "No Disponible";
    document.getElementById('btn').style.marginLeft = "115px"
}
function noDisponible2() {
    document.getElementById('btn-2').innerHTML = "No Disponible";
    document.getElementById('btn-2').style.marginLeft = "115px"
}
function noDisponible3() {
    document.getElementById('btn-3').innerHTML = "No Disponible";
    document.getElementById('btn-3').style.marginLeft = "115px"
}

const ficcion = document.getElementById('ficcion');
const texto = document.getElementById('libros');

ficcion.addEventListener('click', () => {
    texto.innerHTML = ('Ficción');
})

const historicos = document.getElementById('historicos');

historicos.addEventListener('click', () => {
    texto.innerHTML = ('Históricos');
})

const tecnologia = document.getElementById('tecnologia')

tecnologia.addEventListener('click', () => {
    texto.innerHTML = ('Tecnología');
})

const autoayuda = document.getElementById('autoayuda')

autoayuda.addEventListener('click', () => {
    texto.innerHTML = ('Autoayuda');
})

const poesia = document.getElementById('poesia')

poesia.addEventListener('click', () => {
    texto.innerHTML = ('Poesía');
})