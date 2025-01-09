const btnAdd = document.querySelector('.btn-add');
const novoItem = document.querySelector('.add-item');
const listaCompleta = document.querySelector('.lista');
const btnDelete = document.querySelectorAll('.btn-delete');

//adicionando um novo elemento na lista
btnAdd.addEventListener('click', (event) => {
    event.preventDefault()

    //criando um elemento da lista
    const newLi = document.createElement('li');

    //criando uma div da lista
    const newDiv = document.createElement('div')
    newDiv.classList.add('conteudo-lista');

    //criando um novo input
    const newInput = document.createElement('input');
    newInput.type='checkbox';

    //criando um novo p
    let newParagrafo = document.createElement('p');
    newParagrafo = novoItem.value;

    //criando um botão de deletar
    const newBtnDelete = document.createElement('button');
    newBtnDelete.classList.add('btn-delete');

    //criando uma nova imagem
    const newImg = document.createElement('img');
    newImg.src = 'img/assets/icon delete.png';

    newDiv.append(newInput, newParagrafo);
    newBtnDelete.append(newImg);
    newLi.append(newDiv, newBtnDelete);

    listaCompleta.appendChild(newLi);

})

// Delegação de eventos para capturar os botões de delete
listaCompleta.addEventListener('click', (event) => {
    // Verifica se o elemento clicado é um botão de delete
    if (event.target.closest('.btn-delete')) {
        const itemPai = event.target.closest('li'); // Seleciona o <li> pai
        if (itemPai) {
            itemPai.remove(); // Remove o <li>
        }
    }
});