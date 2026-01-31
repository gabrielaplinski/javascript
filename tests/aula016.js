//OBJETOS

let exemplo = { nome: "Aurora" }; // Aponta para caixa na memória. Ex.: #123 (dentro da caixa contém "{ nome: "Aurora" }")

exemplo.nome = "Gabriela"; // Abre a caixa #123 e troca o seu conteúdo

exemplo = { nome: "Rafael" }; // exemplo passa a apontar para uma nova caixa. A antiga continua existindo.

console.log(exemplo);  
