// Função para verificar se um número é par ou ímpar
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return `O número ${numero} é par.`;
    } else {
        return `O número ${numero} é ímpar.`;
    }
}

// Testando a função com um exemplo
const numero = 5;
const resultado = verificarParOuImpar(numero);
console.log(resultado);
