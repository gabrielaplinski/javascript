const alunas = ['Gabriela', 'Aurora', 'Rafael', 1, true, null];

alunas[5] = 'Mojito';
// alunas[6] = 'Farelo'; = 
// alunas[alunos.length] = 'Farelo'; =
alunas.push('Farelo');
alunas.push('Trevor');
alunas.unshift('Brisa');
alunas.unshift('Raphis');
// alunas.pop(); --- Tira o último item da array
alunas.shift();
delete alunas[3];
console.log(alunas);

//console.log(alunas[5]);