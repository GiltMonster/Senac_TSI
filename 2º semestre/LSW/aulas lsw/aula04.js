var aluno_academia = {
    id: 10,
    nome: "Lucas S.",
    altura: 1.69,
    peso: 84.4
};

var nome_aluno = aluno_academia.nome;
var peso_aluno = aluno_academia.peso;
var altura_aluno = aluno_academia.altura;


var imc = peso / (altura ** 2).toFixed(2);


if (imc = 22) {
    console.log("permitido");
} else {
    console.log("sai dai vagabundo");
}