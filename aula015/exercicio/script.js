const num = prompt('Digite um número:');

        const num1 = Number(num); 

        let inteiro = Number.isInteger(num1);
        let rq = Math.pow(num1, 0.5);
        let eNan = Number.isNaN(num1);
        let rMax = Math.ceil(num1);
        let rMin = Math.floor(num1);
        let deci = num1.toFixed(2);

        document.body.innerHTML += `<h1>Seu número é ${num}</h1><br>`;
        document.body.innerHTML += `${num1} é inteiro: ${inteiro}<br>`;
        document.body.innerHTML += `Raiz quadrada: ${rq}<br>`;
        document.body.innerHTML += `É NaN: ${eNan}<br>`;
        document.body.innerHTML += `Arredondado para baixo: ${rMin}<br>`;
        document.body.innerHTML += `Arredondado para cima: ${rMax}<br>`;
        document.body.innerHTML += `Com duas casas decimais: ${deci}<br>`;