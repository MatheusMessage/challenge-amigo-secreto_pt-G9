let usuarioAtual = "";

//criando função de salvar nome
function salvarNome() {
   let nomeInput = document.getElementById("nome").value;
    if (nomeInput == "") {
        alert("Por favor, insira seu nome");
    } else {
        document.getElementById("nome").value = "";
        atualizarLista();
    }
}

// criando lista de amigos vazia
let listaDeAmigos = [];

//criando função de adicionar amigo na lista
function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo == "") {
        alert("Por favor, insira um nome");
    } else {
        listaDeAmigos.push(nomeAmigo);
        document.getElementById("amigo").value ="";
        atualizarLista();
    }
}
// funcão para atualizar a lista de amigos
function atualizarLista() {
    let listaAtualizada = document.getElementById("listaAmigos");
    listaAtualizada.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = listaDeAmigos[i];
        listaAtualizada.appendChild(itemLista);
    }
}
// funcão para sortear amigo e também impedir que a pessoa tire seu proprio nome
function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert("Por favor, insira um nome.");
        return;

    }
    let amigosDisponiveis = listaDeAmigos.filter(amigo => amigo !== usuarioAtual);
    if (amigosDisponiveis.length === 0) {
        alert("Não há amigos disponíveis para sortear (todos são você mesmo).");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigosDisponiveis.length);
    let nomeSorteado = amigosDisponiveis[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: ${nomeSorteado}`;
}  
function reiniciarSorteio() {
    listaDeAmigos.length = 0;
    document.getElementById("resultado").innerHTML = "";
    atualizarLista();
}   atualizarLista();