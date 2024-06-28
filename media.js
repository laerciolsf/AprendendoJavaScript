function calcularMedia() {
   
    const valor1 = 8.5;
    const valor2 = 7.0;
    const valor3 = 9.2;

    // Calcula a média
    const media = (valor1 + valor2 + valor3) / 3;

    // Exibe a média no console
    console.log('Média: ' + media.toFixed(2));

    // Verifica se a média é maior ou igual a 7 e exibe mensagem de parabéns
    if (media >= 7) {
        console.log('Parabéns!');
    }
}

// Chama a função para calcular a média
calcularMedia();
