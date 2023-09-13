let form = document.getElementById('add');

form.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    //alert("valor adicionado")
    let resporta = evento.target.elements['resposta'].value  
    criaelemento(resporta);

})

function criaelemento(novoNome){
    console.log(novoNome);

    const novoItem = document.createElement('li');
    novoItem.classList.add("nome")
    novoItem.innerHTML = novoNome
    lista.appendChild(novoItem)
}