// 1. Botão "Comprar"
const mensagemCarrinho = document.querySelector("#mensagem-carrinho");
const botoesComprar = document.querySelectorAll(".btn-comprar");

botoesComprar.forEach(function (botao) {
  botao.addEventListener("click", function () {
    // mostra a mensagem de feedback no topo da página
    mensagemCarrinho.textContent = "Produto adicionado ao carrinho!";
    mensagemCarrinho.classList.remove("escondido");

    // muda o texto do botão e tbm a sua aparência com a classe pré-definida no css
    botao.textContent = "Adicionado!";
    botao.classList.add("comprado");

    // para ficar um pouquinho mais elegante, a mensagem some depois de um tempo com o timeout
    setTimeout(function () {
      mensagemCarrinho.classList.add("escondido");
    }, 2500);
  });
});

// 2. Campo de busca
const inputBusca = document.querySelector("#busca-input");
const botaoBuscar = document.querySelector("#btn-buscar");
const produtos = document.querySelectorAll(".produto");

botaoBuscar.addEventListener("click", function () {
  let aux = inputBusca.value;
  const termoBuscado = aux.toLowerCase(); // para não ter problema com upper-lower case

  produtos.forEach(function (produto) {
    aux = produto.querySelector("h3");
    const nomeProduto = aux.textContent.toLowerCase(); 

    if (nomeProduto.includes(termoBuscado)) {
      produto.classList.remove("escondido");
    } else {
      produto.classList.add("escondido");
    }
  });
});


//3. Formulário
const formContato = document.querySelector("#form-contato");
const campoNome = document.querySelector("#contato-nome");
const campoEmail = document.querySelector("#contato-email");
const campoMensagem = document.querySelector("#contato-mensagem");
const mensagemContato = document.querySelector("#mensagem-contato");

formContato.addEventListener("submit", function (event) {
  event.preventDefault(); // impede o recarregamento da página

  let formularioValido = true;

  if (campoNome.value.trim() === "") { // usamos o trim para remover espaços em branco !!!
    campoNome.classList.add("campo-erro");
    formularioValido = false;
  } else {
    campoNome.classList.remove("campo-erro");
  }

  if (campoEmail.value.trim() === "") {
    campoEmail.classList.add("campo-erro");
    formularioValido = false;
  } else {
    campoEmail.classList.remove("campo-erro");
  }

  if (campoMensagem.value.trim() === "") {
    campoMensagem.classList.add("campo-erro");
    formularioValido = false;
  } else {
    campoMensagem.classList.remove("campo-erro");
  }

  // se algum campo estiver vazio, o envio é bloqueado
  if (!formularioValido) {
    mensagemContato.textContent = "Preencha todos os campos obrigatórios!";
    mensagemContato.classList.add("erro");
    mensagemContato.classList.remove("escondido");
    return;
  }

  // se chegou até aqui, esta tudo ok
  mensagemContato.textContent = "Mensagem enviada com sucesso!";
  mensagemContato.classList.remove("erro");
  mensagemContato.classList.remove("escondido");
  setTimeout(function () {
    mensagemContato.classList.add("escondido");
  }, 2500);

  // reset manual, campo por campo (em vez de formContato.reset())
  campoNome.value = "";
  campoEmail.value = "";
  campoMensagem.value = "";
});


//3.1 Formulário "Cadastrar Novo Produto" (mesma validação aplicada aqui também)
const formCadastro = document.querySelector("#form-cadastro");
const campoNomeProduto = document.querySelector("#nome");
const campoPreco = document.querySelector("#preco");
const campoImagem = document.querySelector("#imagem");
const campoLink = document.querySelector("#link");
const mensagemCadastro = document.querySelector("#mensagem-cadastro");

formCadastro.addEventListener("submit", function (event) {
  event.preventDefault(); // impede o recarregamento da página

  let formularioValido = true;

  if (campoNomeProduto.value.trim() === "") {
    campoNomeProduto.classList.add("campo-erro");
    formularioValido = false;
  } else {
    campoNomeProduto.classList.remove("campo-erro");
  }

  if (campoPreco.value.trim() === "") {
    campoPreco.classList.add("campo-erro");
    formularioValido = false;
  } else {
    campoPreco.classList.remove("campo-erro");
  }

  if (campoImagem.value.trim() === "") {
    campoImagem.classList.add("campo-erro");
    formularioValido = false;
  } else {
    campoImagem.classList.remove("campo-erro");
  }

  if (campoLink.value.trim() === "") {
    campoLink.classList.add("campo-erro");
    formularioValido = false;
  } else {
    campoLink.classList.remove("campo-erro");
  }

  // se algum campo estiver vazio, o envio é bloqueado
  if (!formularioValido) {
    mensagemCadastro.textContent = "Preencha todos os campos obrigatórios!";
    mensagemCadastro.classList.add("erro");
    mensagemCadastro.classList.remove("escondido");
    return;
  }

  // se chegou até aqui, esta tudo ok
  mensagemCadastro.textContent = "Produto cadastrado com sucesso!";
  mensagemCadastro.classList.remove("erro");
  mensagemCadastro.classList.remove("escondido");
  setTimeout(function () {
    mensagemCadastro.classList.add("escondido");
  }, 2500);

  campoNomeProduto.value = "";
  campoPreco.value = "";
  campoImagem.value = "";
  campoLink.value = "";
});


// 4. Interação visual: ao clicar no card de um produto, ele é destacado com uma borda
produtos.forEach(function (produto) {
  produto.addEventListener("click", function () {
    produto.classList.toggle("favorito");
  });
});