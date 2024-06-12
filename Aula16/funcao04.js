function fatorial(n) {
    // Inicializa a variável resultado como 1
    let fat = 1;
    
    // Loop que começa de n e decrementa até 2
    for (let cont = n; cont > 1; cont--) {
        // Multiplica a variável fat pelo valor atual de cont
        fat *= cont;
    }
    
    // Retorna o valor calculado do fatorial
    return fat;
}

// Testa a função com n = 5
console.log(fatorial(5)); // Saída: 120
