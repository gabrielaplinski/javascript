/* const pessoa1 = {
    nome: 'Aurora',
    sobrenome: 'Plinski',
    idade: '3',
};

console.log (`${pessoa1.nome} ${pessoa1.sobrenome}, ${pessoa1.idade} anos`); 
*/



/* function dadosPessoas (nome, sobrenome, idade) {
    //return {
    //    nome: nome,
    //    sobrenome: sobrenome,
    //    idade: idade,
    // IGUAL À:
    return {nome, sobrenome, idade};
};

const pessoa1 = dadosPessoas('Gabriela', 'Plinski', 28);
const pessoa2 = dadosPessoas('Rafael', 'Lunkes', 30);
const pessoa3 = dadosPessoas('Aurora', 'Plinski', 3);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);
*/


const pessoa1 = {
    nome: 'Aurora',
    sobrenome: 'Plinski',
    idade: 3,

    fala() {
        // console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
        console.log(`Minha idade atual é ${this.idade}.`);
    },

    aumentaIdade() {
        this.idade++;
    },
};

pessoa1.fala();
pessoa1.aumentaIdade();
pessoa1.fala();
pessoa1.aumentaIdade();
pessoa1.fala();
pessoa1.aumentaIdade();
pessoa1.fala();
