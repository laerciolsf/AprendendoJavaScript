// Definição de um objeto 
let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro",
  
    // Método para exibir informações da pessoa
    mostrarInfo: function() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}`);
    },
  
    // Método para atualizar a profissão da pessoa
    atualizarProfissao: function(novaProfissao) {
      this.profissao = novaProfissao;
      console.log(`Profissão atualizada para: ${this.profissao}`);
    }
  };
  
  // Acessando propriedades do objeto
  console.log(`Nome: ${pessoa.nome}`);
  console.log(`Idade: ${pessoa.idade}`);
  console.log(`Profissão: ${pessoa.profissao}`);
  
  // Chamando um método do objeto
  pessoa.mostrarInfo();
  
  // Atualizando uma propriedade do objeto
  pessoa.idade = 31;
  console.log(`Idade atualizada: ${pessoa.idade}`);
  
  // Chamando o método para atualizar a profissão
  pessoa.atualizarProfissao("Desenvolvedor de Software");
  
  // Adicionando uma nova propriedade ao objeto
  pessoa.cidade = "São Paulo";
  console.log(`Cidade: ${pessoa.cidade}`);
  
  // Iterando sobre as propriedades do objeto
  for (let propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
  }
  
  // Definindo um novo método no objeto
  pessoa.saudacao = function() {
    console.log(`Olá, meu nome é ${this.nome} e eu moro em ${this.cidade}.`);
  };
  
  // Chamando o novo método
  pessoa.saudacao();
  