// captura evento de submit do form
const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //se for NaN
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    console.log('Cheguei');
})

/*const peso = document.getElementById('#peso');
const altura = document.getElementById('#altura');
const imc = peso / (altura * altura);*/

function getImc () {
    
}

//criação de parágrafos

function criaPar () {
    const p = document.createElement('p');
    return p;
}

// div #resultado

function setResultado (texto, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaPar();
    p.innerHTML = texto;
    resultado.appendChild(p);
}