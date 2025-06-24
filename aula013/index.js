let varA = 'Aurora'; // varA = banana
let varB = 'Banana'; // varB = Cachorro
let varC = 'Cachorro'; // varC = Aurora


const transicao = varA;

varA = varB;
varB = varC;
varC = transicao;


console.log(varA, varB, varC);
// b c a