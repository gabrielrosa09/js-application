// Eventos de pegar elementos
let element = document.getElementsByTagName("h1");
let elementId = document.getElementById("teste");
let elementClass = document.getElementsByClassName("botao");
let anotherElement = document.querySelector("#teste"); // Retorna o primeiro elemento que encontrar
let anotherElement2 = document.querySelector(".botao"); // Retorna o primeiro elemento que encontrar
let elementsTree = document.querySelectorAll("#teste ul li");

// Eventos de clique

console.log(element[0])

function clicou(){
    const teste = document.getSelector("#teste");
    const ul = teste.querySelector("ul");

    ul.innerHTML = "<li>Item alterado</li>"; // Pega o conteúdo do elemento pode usado pra consultar. altera
    ul.innerHTML += "<li>Item alterado</li>"; // Pega o conteúdo do elemento pode usado pra consultar. adiciona

    ul.children[0].innerHTML = "<li>Item alterado</li>"; // Pega o conteúdo do elemento pode usado pra consultar. altera
    ul.children[0].innerText = "<li>Item alterado</li>"; // Pega o conteúdo do elemento pode usado pra consultar. altera o texto
    console.log(ul.outerHTML); // Pega o conteudo de fora, pouco utilizado
    
}

let botao = document.querySelector(".botao")
botao.addEventListener("click", clicou); // escutador de eventos

// botao.addEventListener("click", () => {
//     clicou();
// });