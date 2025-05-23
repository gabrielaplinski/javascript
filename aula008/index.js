const nome = 'Gabriela'
const sobrenome = 'Piovesan Plinski'
const idade = 28;
const peso = 57;
const alturaEmM = 1.67;
let indiceMassaCorporal;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM); //peso / (altura * altura)
let anoNascimento;
anoNascimento = 2025 - idade;

console.log(nome + ' ' + sobrenome, 'tem', idade, 'anos,', peso + 'kg', 'e', alturaEmM + 'm de altura.');
console.log('Seu IMC é', indiceMassaCorporal + '.');
console.log(`${nome} nasceu em ${anoNascimento}.`);