
// Define a função parimpar que verifica se um número é par ou ímpar
function parimpar(n) {
    // Verifica se o número é par usando o operador módulo (%)
    if (n % 2 == 0) {
        // Se o número for par, retorna 'Par'
        return 'Par';
    } else {
        // Se o número for ímpar, retorna 'Impar'
        return 'Impar';
    }
}

// Chama a função parimpar com o argumento 4 e armazena o resultado na variável res
let res = parimpar(4);

// Imprime o resultado concatenado com a string 'Seu número é: '
console.log('Seu número é: ' + res); // Saída: Seu número é: Par
