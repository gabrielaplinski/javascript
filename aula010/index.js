let exemploUndefined; //undefined -> não aponta para lugar nenhum na memória
const exemploNull = null; //Nulo -> também não aponta para lugar nenhum na memória, mas aponta que é este o objetivo.
const aprovado = false; //boolean (lógico)

console.log(typeof aprovado, aprovado);

let a = 2;
const b = a;

console.log(a, b);

a = 3;

console.log(a, b);