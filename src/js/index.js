
console.log("mostar o document", document);

const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video")
const modal = document.querySelector(".modal");
const linkDoVideo = (video.src);

function alternarModal(){
modal.classList.toggle("aberto");

}
// -Passo 1 dar um jeito de pegar o elemento que representa o botao na tela usando JS
console.log(document.querySelector(".botao-trailer"));

// -Passo 3 dar um jeito de pegar o elemento bda modal no JS

// -Passo 2 identificar quando o usuario cliclar no botao

botaoTrailer.addEventListener
 ("click", () => {
// -Passo 4 abri a modal na tela
alternarModal();
video.setAttribute("src", linkDoVideo);
});
 
// /*OBJ 2 - quando o usuario clicar no x devemos fechar a modal
// -Passo 1 dar um jeito de pegar o  elemento de fechar modaL usando o js

const botaoFecharModal = document.querySelector(".fechar-modal");

// -Passo 2 identificar quando o usuario clicar no x
botaoFecharModal.addEventListener
("click", () => {
    // -Passo 3 fechar a modal
  modal.classList.toggle("aberto");
  video.setAttribute("src","")

}); 

