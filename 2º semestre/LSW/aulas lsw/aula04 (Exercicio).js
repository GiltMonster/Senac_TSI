/* ------------------------------ exercício 1 ------------------------------ */

var aluno = {
    nome: "Diego",
    idade: 25,
    email: "diego@email.com"
}


/* ------------------------------ exercício 2 ------------------------------ */

var livro = {
    titulo: "Aprendendo JavaScript",
    autor: "Diego",
    paginas: 220
}

console.log(`O autor do livro ${livro.titulo} é ${livro.autor} e o email do autor é ${aluno.email}`);

/* ------------------------------- exercício 3 ------------------------------ */

var aluno = {
    nome: "Diego",
    idade: 25,
    notas_matematica: {
        p1: 8,
        p2: 7,
        p3: 6
    },
    notas_portugues: {
        p1: 9,
        p2: 8,
        p3: 7
    },
    notas_geografia: {
        p1: 10,
        p2: 9,
        p3: 8
    }
}

console.log(`A média do aluno ${aluno.nome} em matemática é ${(aluno.notas_matematica.p1 + aluno.notas_matematica.p2 + aluno.notas_matematica.p3) / 3}`);
console.log(`A média do aluno ${aluno.nome} em português é ${(aluno.notas_portugues.p1 + aluno.notas_portugues.p2 + aluno.notas_portugues.p3) / 3}`);
console.log(`A média do aluno ${aluno.nome} em geografia é ${(aluno.notas_geografia.p1 + aluno.notas_geografia.p2 + aluno.notas_geografia.p3) / 3}`);


/* ------------------------------- exercício 4 ------------------------------ */

var carro = {
    marca: "Ford",
    modelo: "Fiesta",
    ano: 2019,
    boa_conservacao: true
}

console.log(`O carro ${carro.marca} ${carro.modelo} é de ${carro.ano} e está em boa conservação? ${carro.boa_conservacao}`);

/* ------------------------------- exercício 5 ------------------------------ */

var carrinho_compras = {
    produtos: [
        { nome: "arroz", preco: 10 },
        { nome: "feijão", preco: 8 },
        { nome: "macarrão", preco: 7 }
    ]
}

var total_comprou = carrinho_compras.produtos[0].preco + carrinho_compras.produtos[1].preco + carrinho_compras.produtos[2].preco;
console.log(`O total da compra foi de R$ ${total_comprou}`);