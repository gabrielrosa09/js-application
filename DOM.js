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

    ul.children[0].innerHTML = "<li>Item alterado</li>"; // Pega o conteúdo do elemento pode usado pra consultar. altera e substitui tudo
    ul.children[0].innerText = "<li>Item alterado</li>"; // Pega o conteúdo do elemento pode usado pra consultar. altera o texto
    console.log(ul.outerHTML); // Pega o conteudo de fora, pouco utilizado

    ul.children[0].append("(alterado)"); // Adiciona o elemento no final, mas só funciona com texto
    ul.children[0].remove(); // Remove o elemento

    let newLi = document.createElement("li");
    newLi.innerText = "Item adicionado";

    ul.appendChild(newLi); // Adiciona o elemento
    
    ul.prepend(newLi); // Adiciona o elemento no início

    const newButton = document.createElement("button");
    newButton.innerText = "Clique aqui";

    ul.after(newButton);

    ul.before(""); // add antes
    ul.after(""); // add depois
}

let botao = document.querySelector(".botao")
botao.addEventListener("click", clicou); // escutador de eventos

// botao.addEventListener("click", () => {
//     clicou();
// });


function clicou2(){
    const ul = teste.querySelector("ul");
    let newUl = document.createElement("ul");

    for (let i = 0; i < 5; i++) {
        let newLi = document.createElement("li");
        newLi.innerText = `Item ${i + 1}`;
        newUl.appendChild(newLi);
    }

    ul.after(newUl);
}

// pegar atributos dos elementos

function monstrar_senha(){
    const input = document.querySelector("input");

    console.log(input.getAttribute("placeholder")); // Pega o valor do atributo

    if (input.hasAttribute("placeholder")) { // Verifica se tem o atributo
        console.log("Tem o atributo");
    } else {
        console.log("Não tem o atributo");
    }

    input.setAttribute("placeholder", "Digite algo"); // Altera o atributo

    if (input.getAttribute("type") == "text"){
        input.setAttribute("type", "password")
    } else {
        input.setAttribute("type", "text"); // Altera o atributo
    }
}