let nome = "João";
let sobrenome = "Roque";
let nomeCompleto = `${nome} ${sobrenome} da Silva` // tipo o fstring do python
console.log(nome);
// usar sempre o === 

let isMember = true;
let isUser = isMember ? 2 : 10;  // se for membro é 2, se não é 10

// Arrow function
function soma(a, b) {
    return a + b;
}

const somar = (a, b) => {
    return a + b;
}

const somar2 = (a, b) => a + b;

// pop = remove o ultimo elemento do array
// shift = remove o primeiro elemento do array

let pessoa = {
    nome: "João",
    idade: 25,
    sobrenome: "Lucas",
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nomeCompleto());