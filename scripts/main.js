let form = document.getElementById('novoItem')
const lista = document.getElementById("lista");
console.log(form);
const itens = [];

form.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    
    console.log(evento)
    nome = evento.target.elements['nome'].value;
    quanditade =evento.target['quantidade'].value;
    criaElemento(nome,quanditade)

    evento.target.elements['nome'].value = "";
    evento.target.elements['quantidade'].value = "";
    
} )

function criaElemento(nome,quantidade){
    console.log(nome);
    console.log(quantidade);

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numero = document.createElement('strong');
    numero.innerHTML= quantidade;

    novoItem.appendChild(numero)
    novoItem.innerHTML += nome;

    const lista = document.getElementById("lista");

    lista.appendChild(novoItem)

    const itemAtual = {
        "nome": nome,
        "quantidade" : quantidade
    }

    itens.push(itemAtual);

    localStorage.setItem("item", JSON.stringify(itens))
}
