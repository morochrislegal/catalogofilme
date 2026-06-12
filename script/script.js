const filmes = [{
    titulo: "Gente Grande",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3vk6keGwuFr3Ck1TNlt8nrXjSc58WK6xwQ&s",
    descricao: "O filme acompanha cinco amigos de infância que se reencontram após trinta anos. Eles alugam uma casa no lago para passar o fim de semana do feriado de 4 de julho. ",
},
{
    titulo: "Batman",
    imagem:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    descricao: "O Cavaleiro das Trevas",
},
{
    titulo: "Homem-Aranha",
    imagem: "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    descricao: "O amigo da vizinhança",
},

{
    titulo: "Minecraft",
    imagem: "https://media.fstatic.com/N7WeSh0LNFtoL5cjCTmtk26k-i0=/full-fit-in/629x300/media/articles/main/2025/04/06/ff7ec16d-8161-4a24-bf4c-c64ad5a08591-596230497.jpg",
    descricao: "O mundo quadrado",
},
{
    titulo: "Os Devoradores de Estrela",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMGavLRCvsiwbh7G2sg1heXElB1McGIeBZQ&s",
    descricao: "Comendo as Estrela",
},
{
    titulo: "Michael Jackson",
    imagem: "https://www.estadao.com.br/resizer/v2/JJEYVX3G3RA3VF7RCQHMWEUWPE.jpg?quality=80&auth=88cc49b168b2aa57b596f9274a0e6c35225e769eeeecbdf22e98e6f9e8cc44dd&width=380",
    descricao: "O Rei do Pop",
},
{
    titulo: "Carros o Filme",
    imagem: "https://cinemaweb.com.br/wp-content/uploads/2024/10/carros-4-vai-acontecer.jpg",
    descricao: "Vrummm Vrummm Vrummmmmmmmm",
},


]


const listaFilmes = document.getElementById ("listaFilmes");

function mostrarFilmes(lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
        <div class="col-md-4">
            <div class="card card-filme h-100">
            <img src="${filme.imagem}" class="card-img-top">
            <div class="card-body">
            <h3>${filme.titulo}</h3>
            <p>${filme.descricao}</p>
            <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver detalhes</button>
        </div>
        </div>
    </div>
        `
    })
}

mostrarFilmes(filme);

function verDetalhes(titulo, descricao) {
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    });
}

