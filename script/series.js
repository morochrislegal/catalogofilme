const series = [
{
    titulo: "Stranger Things",
    imagem: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    descricao: "Mistérios sobrenaturais em Hawkins",
},
{
    titulo: "The Last of Us",
    imagem: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    descricao: "Sobrevivência em um mundo pós-apocalíptico",
},
{
    titulo: "Breaking Bad",
    imagem: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    descricao: "A transformação de um professor em criminoso",
},
{
    titulo: "Invencível",
    imagem: "https://cinemacomnerdice.wordpress.com/wp-content/uploads/2021/05/invencivel.jpg",
    descricao: "O herói mais poderoso da Terra",
},
{
    titulo: "Supernatural",
    imagem: "https://i.pinimg.com/originals/01/4f/0d/014f0de7ec13834005924c8e27a7270e.jpg",
    descricao: "Os irmãos Sam e Dean Winchester, que viajam pelos EUA em um Chevrolet Impala 1967 caçando monstros, demônios e entidades paranormais.",
},
{
    titulo: "Loki",
    imagem: "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg",
    descricao: "As aventuras do deus da trapaça",
},
{
    titulo: "The Boys",
    imagem: "https://image.tmdb.org/t/p/w500/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg",
    descricao: "Super-heróis nada convencionais",
},


]

const listaSeries = document.getElementById("listaSeries");

function mostrarSeries(lista) {
    listaSeries.innerHTML = "";

    lista.forEach(serie => {
        listaSeries.innerHTML += `
        <div class="col-md-4">
            <div class="card card-serie h-100">
                <img src="${serie.imagem}" class="card-img-top">
                <div class="card-body">
                    <h3>${serie.titulo}</h3>
                    <p>${serie.descricao}</p>
                    <button class="btn btn-dark" onclick="verDetalhes('${serie.titulo}')">
                        Ver detalhes
                    </button>
                </div>
            </div>
        </div>
        `;
    });
}

mostrarSeries(serie);

function verDetalhes(titulo, descricao) {
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    });
}