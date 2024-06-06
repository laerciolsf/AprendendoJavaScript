function fatorial(numero) {
    // Caso base: Se o número for 0 ou 1, o fatorial é 1
    if (numero === 0 || numero === 1) {
        return 1;
    }
    // Caso recursivo: fatorial(n) = n * fatorial(n-1)
    else {
        return numero * fatorial(numero - 1);
    }
}

// Exemplo de uso
console.log(fatorial(5)); // Saída: 120
