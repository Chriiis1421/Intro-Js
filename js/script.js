const PI = 3.14;

console.log(PI);

var nome = "Chris";

var dtNascimento = "27/01/1995";

var anoAtual = new Date().getFullYear();
console.log(anoAtual);

var anoNasc = dtNascimento.split('/')[2];
console.log(anoNasc);

var idade = anoAtual - anoNasc;
console.log(idade);

var teste = false;
console.log(teste);

var conhecimentosTecnicos = ["CSS", "HTML", "JavaScript", "Bootstrap"];
console.log(conhecimentosTecnicos[2]);

var funcionario = {
    id: 1,
    nome: "João",
    sobrenome: "Silva",
    cargo: "Encarregado",
    departamento: {
        id: 1,
        setor: "compras",
    },
}

console.log(funcionario.nome, funcionario.departamento.setor);

console.log(typeof(funcionario));
console.log(typeof(PI));
console.log(typeof(nome));

console.log(`Nome: ${nome}, Idade: ${idade}, Data Nasc: ${dtNascimento}`);

// Comparação de dados entre variável, independente do tipo
var x = 10;

if(x == "10") {
    console.log("É igual");
} else {
    console.log("Não é igual");
}

// Comparação entre dados e tipo
var x = 10;

if(x === "10") {
    console.log("É igual");
} else {
    console.log("Não é igual");
}

// Operador condicional ternário
console.log(x === 10 ? "é igual" : "Não é igual");

for(i=0; i<9; i++) {
    console.log(i );
}

// Iterar sobre objetos
var categorias = {
    eletronicos : "Eletrônicos",
    moveis : "moveis",
    telefonia : "Smartphones",
    automotiva : "Automotivas",
}

for(let cat in categorias) {
    console.log(`Categoria: ${categorias[cat]}`);
}

// Funções



// Funções Expressas - função dentro de uma variável
const impressao = function () {
    console.log("Dentro da função");
    for(let cat in categorias) {
        console.log(`Categoria: ${categorias[cat]}`);
    }
}

impressao();

console.log(typeof(impressao));

// Arrow Functions
const numeroAleatorio = () => Math.random();

console.log(numeroAleatorio());