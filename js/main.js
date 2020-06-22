function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"; // <b> deixa o texto bold
}

function redirecionar(){
//    window.open("https://digitalinnovation.one/");            // abre página em outra janela
    window.location.href = "https://digitalinnovation.one/";  // abre página na mesma janela
}

function trocar(elemento){ // recebe id do elemento como argumento
//    document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse!</b>"; // usa o id do elemento
    elemento.innerHTML = "<b>Obrigado por passar o mouse!</b>";                             // usa o id recebido
}

function voltar(elemento){ // recebe elemento como argumento                                // usa o id do elemento
//    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";                  // usa o id recebido
    elemento.innerHTML = "Passe o mouse aqui";
}