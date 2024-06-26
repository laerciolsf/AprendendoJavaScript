// Função para calcular o fatorial de um número
function calcularFatorial(numero) {
    if (numero < 0) {
        return "O fatorial não está definido para números negativos.";
    } else if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let fatorial = 1;
        for (let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}

// Valor padrão para o qual queremos calcular o fatorial
let numeroPadrao = 5;

// Calcula o fatorial do valor padrão e exibe o resultado 
let resultado = calcularFatorial(numeroPadrao);
console.log("O fatorial de " + numeroPadrao + " é: " + resultado);
