function tabuadaSimples(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Exemplo de uso:
let numero = 50;// Número da tabuada que deseja.
tabuadaSimples(numero);
