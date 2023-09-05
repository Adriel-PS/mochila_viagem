let form = document.getElementById('novoItem')
const lista = document.getElementById("lista");
console.log(form);

form.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    
    console.log(evento)
    nome = evento.target.elements['nome'].value;
    quanditade =evento.target['quantidade'].value;
    criaElemento(nome,quanditade)
} )

function criaElemento(nome,quanditade){
    console.log(nome);
    console.log(quanditade);

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numero = document.createElement('strong');
    numero.innerHTML= quanditade;

    novoItem.appendChild(numero)
    novoItem.innerHTML += nome;

    const lista = document.getElementById("lista");

    lista.appendChild(novoItem)
}
