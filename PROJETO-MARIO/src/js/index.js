const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharTrailer = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkVideo = video.src;

function alternarModal () {
	modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", linkVideo);
})

botaoFecharTrailer.addEventListener("click", () =>{
	alternarModal();
	video.setAttribute("src", "");
})