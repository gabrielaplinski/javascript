// captura evento de submit do form
const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    //transforma em number
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
    const paramImc = parametrosImc(imc);
    const msg = `Seu IMC é ${imc} (${paramImc})`

    setResultado(msg, true);
});

// estabelecendo os parâmetros IMC

function parametrosImc (imc) {
    const parametro = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 1'];

    if (imc >= 39.9) return parametro[5];
    if (imc >= 34.9) return parametro[4];
    if (imc >= 29.9) return parametro[3];
    if (imc >= 24.9) return parametro[2];
    if (imc >= 18.5) return parametro[1];
    if (imc < 18.5) return parametro[0];
}

//função para calcular o IMC
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
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

    if (isValid) {
        p.classList.add('p-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = texto;
    resultado.appendChild(p);
}