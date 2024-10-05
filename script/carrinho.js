// para verificação de login--------------------------------------------------------------------------------

if (usuarioLogado == null) {
    window.alert("Você precisa estar logado para acessar essa página!");
    window.location.href = "../pages/login-singin.html";
}



// para verificação de login--------------------------------------------------------------------------------

const produtosNoCarrinho = (JSON.parse(localStorage.getItem('listaVinhos')));

if (produtosNoCarrinho == null) {
    window.alert("Você não possui produtos no carrinho!");
}else{
    produtosNoCarrinho.forEach(produto => {

        nomeVinho = produto.nome;
        
        produtoPreco = produto.preco;

        produtoQuantidade = produto.quantidade;

        produtoImagem = produto.imagem;
        
        document.querySelector(".lista-produtos-area").innerHTML += 
        "<div class='card'>" +
        "<div class='espaco-1'>" +
        "<img src='../assets/foto-vinho.png' alt='foto do vinho' class='foto-vinho'>" +
        "</div>" +
        "<div class='espaco-2'>" +
        "<div>" +
        "<h2>ITEM</h2>" +
        "<div class='divisoria'></div>" +
        "</div>" +
        "<div class='conteudo'>" +
        "<h3 class='nome-item'>"+ nomeVinho.toUpperCase() + "</h3>" +
        "</div>" +
        "</div>" +
        "<div class='espaco-3'>" +
        "<div>" +
        "<h2>PREÇO</h2>" +
        "<div class='divisoria'></div>" +
        "</div>" +
        "<div class='conteudo'>" +
        "<h3 class='preco-item'>R$ " + produtoPreco + "</h3>" +
        "</div>" +
        "</div>" +
        "<div class='espaco-4'>" +
        "<div>" +
        "<h2>QTD</h2>" +
        "<div class='divisoria'></div>" +
        "</div>" +
        "<div class='conteudo'>" +
        "<div class='alterar-quantidade'>" +
        "<div class='somar'><p>+</p></div>" +
        "<div class='circulo'>" +
        "<p class='quantidade'>" + produtoQuantidade + "</p>" +
        "</div>" +
        "<div class='subtrair'><p>–</p></div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";

        document.querySelector(".resumo-produtos").innerHTML +=
        "<div class='produto'>" +
        "<h2 class='nome-produto'>" + nomeVinho.toUpperCase() + "</h2>" +
        "<h2 class='preco-produto'>R$ " + produtoPreco*produtoQuantidade + "</h2>" +
        "</div>";

    });
};

document.querySelector(".preco-entrega").innerHTML = "R$ " + (Math.random() * (50 - 10) + 10).toFixed(2);

precoTotal = document.querySelector(".preco-total").innerHTML


precoCalculado = 0;
document.querySelectorAll(".preco-produto").forEach(preco => {

    
    precoCalculado += parseFloat(preco.innerHTML.replace("R$ ", ""));
    });

document.querySelector(".preco-total").innerHTML = "R$ " + (precoCalculado + (parseFloat(document.querySelector(".preco-entrega").innerHTML.replace("R$ ", "")))).toFixed(2);

// alterar a quantidade de produtos no carrinho---------------------------------------------------------------

cardConjunto = document.querySelectorAll(".card")

cardConjunto.forEach(card => {
    
    card.querySelector(".somar").addEventListener("click", () => {
        card.querySelector(".quantidade").innerHTML = parseInt(card.querySelector(".quantidade").innerHTML) + 1;
                atualizarResumo(card);
    });

    card.querySelector(".subtrair").addEventListener("click", () => {
        if (parseInt(card.querySelector(".quantidade").innerHTML) > 1) {
            card.querySelector(".quantidade").innerHTML = parseInt(card.querySelector(".quantidade").innerHTML) - 1;
                    atualizarResumo(card);
        }else{
            
            if (window.confirm("Deseja remover o produto do carrinho?")) {
                card.parentElement.removeChild(card);
                document.querySelectorAll(".nome-produto").forEach(nome => {
                    if (nome.innerHTML.toUpperCase() == card.querySelector(".nome-item").innerHTML.toUpperCase()) {
                        nome.parentElement.parentElement.removeChild(nome.parentElement);
                    }
                });
                atualizarResumo(card)
            }
        }
    });

});

function atualizarResumo(card) {
    precoDoProduto = parseFloat(card.querySelector(".preco-item").innerHTML.replace("R$ ", "")).toFixed(2);
    quantidadeDoProduto = parseInt(card.querySelector(".quantidade").innerHTML);
    precoAtualizado = parseFloat(precoDoProduto * quantidadeDoProduto).toFixed(2)
    
    
    document.querySelectorAll(".nome-produto").forEach(nome => {
        if (nome.innerHTML.toUpperCase() == card.querySelector(".nome-item").innerHTML.toUpperCase()) {
                        nome.parentElement.querySelector(".preco-produto").innerHTML = "R$ " + precoAtualizado;
        }
    });
        
        precoCalculado = 0;

    document.querySelectorAll(".preco-produto").forEach(preco => {
            precoCalculado += parseFloat(preco.innerHTML.replace("R$ ", ""));
    });

    document.querySelector(".preco-total").innerHTML = "R$ " + (precoCalculado + (parseFloat(document.querySelector(".preco-entrega").innerHTML.replace("R$ ", "")))).toFixed(2);
};

const botaoCompra = document.querySelector('.botao-reserva')

botaoCompra.addEventListener("click", function(){
    console.log("clicado")
    if (confirm("Deseja finalizar?")){
        alert("Será enviado um email, para finalização do pagamento. Muito obrigado!")
        window.location.href = "../pages/catalogo.html";
    }

})
