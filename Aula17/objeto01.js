// Declara um objeto chamado 'amigo' com propriedades e métodos
let amigo = {
    // Propriedade 'nome' com valor 'José'
    nome: 'José',
    // Propriedade 'sexo' com valor 'M'
    sexo: 'M',
    // Propriedade 'peso' com valor 70
    peso: 70,
    // Método 'engordar' que recebe um parâmetro 'p' com valor padrão 0
    engordar(p=0) {
        // Imprime 'Engordou!' no console
        console.log('Engordou!')
        // Adiciona o valor de 'p' ao peso atual de 'amigo'
        this.peso += p
    }
}

// Chama o método 'engordar' do objeto 'amigo' passando 2 como argumento
amigo.engordar(2)

// Imprime o objeto 'amigo' atualizado no console
console.log(amigo)
