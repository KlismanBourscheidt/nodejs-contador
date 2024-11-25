const prompt = require("prompt-sync")();

function contadores() {
    let cont = 0;
    let soma = 0;

    for (cont = 1; cont <= 10; cont++) {
        let valor = Number(prompt('Digite um número de 1 a 10: '));

        // Verifica se o número está no intervalo esperado
        while (valor < 1 || valor > 10) {
            console.log("Por favor, insira um número entre 1 e 10.");
            valor = Number(prompt('Digite um número de 1 a 10: '));
        }

        soma += valor; // Soma o valor atual à soma acumulada

        console.log(`Contador: ${cont}, Número digitado: ${valor}, Soma acumulada: ${soma}`);
    }
}

contadores();