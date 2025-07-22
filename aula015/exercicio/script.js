const num = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = num;
texto.innerHTML += `Seu número +2 é ${num + 2}<br>`;
texto.innerHTML += `${num} é inteiro: ${Number.isInteger(num)}<br>`;
texto.innerHTML += `Raiz quadrada: ${num ** 0.5}<br>`;
texto.innerHTML += `É NaN: ${Number.isNaN(num)}<br>`;
texto.innerHTML += `Arredondado para baixo: ${Math.floor(num)}<br>`;
texto.innerHTML += `Arredondado para cima: ${Math.ceil(num)}<br>`;
texto.innerHTML += `Com duas casas decimais: ${num.toFixed(2)}<br>`;
