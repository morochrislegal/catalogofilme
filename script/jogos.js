const jogos = [{
    titulo: "Minecraft",
    imagem: "https://preview.redd.it/whats-the-name-of-this-texture-pack-from-the-games-cover-v0-4lv9qrcjjui71.jpg?width=640&crop=smart&auto=webp&s=ef037b75b942484e33bec8eb703e4fcf67da4fb6",
    descricao: "quadrado",
},
{
    titulo: "Roblox",
    imagem: "https://newzoo.com/wp-content/uploads/api/games/artworks/game--roblox.jpg",
    descricao: "",
},
{
    titulo: "Dead By Daylight",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomiTc-P-2UzgUdxEBAY4hD5jD49DTCZtZwQ&s",
    descricao: ","
},
{
    titulo: "Ultrakill",
    imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Ultrakill_cover.png/250px-Ultrakill_cover.png",
    descricao: "",
},
{
    titulo: "Grand Theft Auto 5",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/80/Grand_Theft_Auto_V_capa.png/250px-Grand_Theft_Auto_V_capa.png",
    descricao: "",
},
{
    titulo: "Fortnite",
    imagem: "https://m.media-amazon.com/images/M/MV5BMTZlMmIxM2EtN2Y4Zi00M2ZhLTk3NzgtNjJmZTU0MTQ3YjcwXkEyXkFqcGc@._V1_.jpg",
    descricao: "",
},
{
    titulo: "Rocket League",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCawmBYMLpQBznASj8gVr87dN_2ppXbyZcg&s",
    descricao: "",
},
{
    titulo: "Alien Isolation",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XY_1L18M7bsrj7meNHfHjLMsWzYx1P6_LQ&s",
    descricao: "",
},
{
    titulo: "Resident Evil 7: Biohazard",
    imagem: "https://store-images.s-microsoft.com/image/apps.38644.71433286839923669.1250138a-286b-4b3f-8367-3d201ae45ae9.a08b2cbe-68eb-4c9e-a196-78097193172f",
    descricao: ""
},
{
    titulo: "Resident Evil 4",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOdn-mat1iV5T4HNZYoWi778Fo08Fm2Hi4Q&s",
    descricao: "welcome leon",
},
]


const listaJogos = document.getElementById("listaJogos");

function mostrarJogos(lista) {
    listaJogos.innerHTML = "";

    lista.forEach(jogos => {
        listaJogos.innerHTML += `
        <div class="col-md-4">
            <div class="card card-serie h-100">
                <img src="${jogos.imagem}" class="card-img-top">
                <div class="card-body">
                    <h3>${jogos.titulo}</h3>
                    <p>${jogos.descricao}</p>
                    <button class="btn btn-dark" onclick="verDetalhes('${jogos.titulo}')">
                        Ver detalhes
                    </button>
                </div>
            </div>
        </div>
        `;
    });
}

mostrarJogos(jogos);

function verDetalhes(titulo) {
    Swal.fire({
        title: "titulo",
        text: "Mais informações da série",
        icon: "info"
    });
}