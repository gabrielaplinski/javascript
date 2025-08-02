/* VALOR PRIMITIVO - IMUTÁVEL

let a = 'A';
let b = a; // cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);
*/


// REFERÊNCIA - MUTÁVEIS - PASSADOS POR REFERÊNCIA
let a = [1, 2, 3];
let b = [...a]; // b se torna independente, exatamente como é o a inicialmente
console.log(a, b);

a.push(4); /*adicionando um item na array*/
console.log(a, b);

b.pop(); /*removendo o item da array*/
console.log(a, b);