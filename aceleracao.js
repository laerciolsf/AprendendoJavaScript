// Função para calcular a aceleração
function calcularAceleracao() {
    // Pedir ao usuário para inserir os valores
    let velocidadeInicial = parseFloat(prompt("Digite a velocidade inicial (m/s):"));
    let velocidadeFinal = parseFloat(prompt("Digite a velocidade final (m/s):"));
    let tempo = parseFloat(prompt("Digite o tempo decorrido (s):"));

    // Calcular a aceleração
    let aceleracao = (velocidadeFinal - velocidadeInicial) / tempo;

    // Mostrar o resultado no console
    console.log("A aceleração é:", aceleracao.toFixed(2), "m/s²");
}

// Chamar a função para calcular a aceleração
calcularAceleracao();