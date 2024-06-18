// Função para calcular o IMC
function calcularIMC(peso, altura) {
    // O IMC é calculado dividindo o peso (em kg) pela altura (em metros) ao quadrado
    var imc = peso / (altura * altura);
    return imc;
}

// Função para classificar o IMC
function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        return 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 39.9) {
        return 'Obesidade Grau II';
    } else {
        return 'Obesidade Grau III';
    }
}

// Exemplo de uso
var peso = 70; // em kg
var altura = 1.75; // em metros

var imc = calcularIMC(peso, altura);
var classificacao = classificarIMC(imc);

console.log('IMC: ' + imc.toFixed(2));
console.log('Classificação: ' + classificacao);
