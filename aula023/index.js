/*
AVALIAÇÃO DE CURTO CIRCUITO

Em &&, conta o valor do primeiro que for false:

FALSY (valores falsos):
- false
- 0
- '' / "" / ``
- null / undefined
- NaN

ex ---> console.log('Gabriela' && '' && 'Plinski')

ou se não tiver nenhum FALSY, conta o primeiro true

ex ---> 
function chat () {
    return 'Hello';
}

const secVar = 'exemplo';

console.log(secVar && chat());
*/
/*
Em ||, conta o valor do primeiro true*/
console.log(0 || false || null)

