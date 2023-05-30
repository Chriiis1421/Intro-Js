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