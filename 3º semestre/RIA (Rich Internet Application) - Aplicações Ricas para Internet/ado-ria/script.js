function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
    document.querySelector('.card' || '.coluna').style.cursor = 'grabbing';

}

function allowDrop(event) {
    event.preventDefault();

}

function drop(event) {
    event.preventDefault();
    document.querySelector('.card').style.cursor = 'grab';

    //defino a variável obj como o id do elemento que está sendo arrastado
    let obj = event.dataTransfer.getData('text');
    //defino o produto como o elemento que tem o id igual ao id do elemento que está sendo arrastado
    let produto = document.getElementById(obj);
    //defino o carrinho como o elemento que tem o id carrinho   
    let carrinho = document.getElementById('carrinho');

    // Verifica se o produto já está no carrinho
    let produtoNoCarrinho = carrinho.querySelector(`#${obj}-carrinho`);

    if (produtoNoCarrinho) {
        // Se o produto já está no carrinho, incrementar a unidade
        let unidadeElemento = produtoNoCarrinho.querySelector('.produto-unidade');
        let unidadeAtual = parseInt(unidadeElemento.textContent);
        unidadeElemento.textContent = unidadeAtual + 1;
    } else {
        // Se o produto não está no carrinho, adicioná-lo
        let novoProduto = produto.cloneNode(true);
        novoProduto.id = `${obj}-carrinho`;  // Adiciona um sufixo para o ID do produto no carrinho

        // Atualiza a unidade do novo produto para 1
        novoProduto.querySelector('.produto-unidade').textContent = 1;

        let divBottoes = document.createElement('div');
        divBottoes.classList.add('d-flex', 'justify-content-between');
        novoProduto.appendChild(divBottoes);

        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.classList.add('btn', 'btn-danger', 'btn-sm', 'mt-2');
        botaoRemover.onclick = () => {
            carrinho.removeChild(novoProduto);
            atualizaPreco();
        };

        divBottoes.appendChild(botaoRemover);

        carrinho.appendChild(novoProduto);
    }

    // Chama a função que atualiza o preço total
    atualizaPreco();
}

function atualizaPreco() {
    let precos = document.querySelectorAll('#carrinho .produto-preco');
    let total = 0;

    precos.forEach(preco => {
        // Edita a droga do $ e da vírgula
        let valor = parseFloat(preco.textContent.replace('R$', '').replace(',', '.'));

        // Aqui tem que pegar o valor da unidade porque eu não vou deixar ele levar produto de graça
        let unidade = parseInt(preco.closest('.card').querySelector('.produto-unidade').textContent);

        // Me recuso a comentar o que é isso
        total += valor * unidade;
    });

    // Atualiza o valor total no HTML :v
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}