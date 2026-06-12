const jogos = [{
    titulo: "Minecraft",
    imagem: "https://preview.redd.it/whats-the-name-of-this-texture-pack-from-the-games-cover-v0-4lv9qrcjjui71.jpg?width=640&crop=smart&auto=webp&s=ef037b75b942484e33bec8eb703e4fcf67da4fb6",
    descricao: "O Minecraft é um jogo eletrônico de aventura do tipo sandbox onde os jogadores exploram um mundo aberto tridimensional feito de blocos",
},
{
    titulo: "Roblox",
    imagem: "https://newzoo.com/wp-content/uploads/api/games/artworks/game--roblox.jpg",
    descricao: "O Roblox é uma plataforma imersiva global de jogos e criação",
},
{
    titulo: "Dead By Daylight",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomiTc-P-2UzgUdxEBAY4hD5jD49DTCZtZwQ&s",
    descricao: "é um jogo de terror multijogador onde 4 Sobreviventes tentam fugir de 1 Assassino."
},
{
    titulo: "Ultrakill",
    imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Ultrakill_cover.png/250px-Ultrakill_cover.png",
    descricao: "é um jogo de tiro em primeira pessoa (FPS) rápido e violento. Você controla V1, um robô que desce ao Inferno em busca de sangue para sobreviver.",
},
{
    titulo: "Grand Theft Auto 5",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/80/Grand_Theft_Auto_V_capa.png/250px-Grand_Theft_Auto_V_capa.png",
    descricao: "Eles realizam assaltos perigosos em Los Santos para resolver problemas com o governo e máfias.",
},
{
    titulo: "Fortnite",
    imagem: "https://m.media-amazon.com/images/M/MV5BMTZlMmIxM2EtN2Y4Zi00M2ZhLTk3NzgtNjJmZTU0MTQ3YjcwXkEyXkFqcGc@._V1_.jpg",
    descricao: " é um jogo online multijogador e uma plataforma de entretenimento. A sua modalidade mais famosa é o Battle Royale.",
},
{
    titulo: "Rocket League",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCawmBYMLpQBznASj8gVr87dN_2ppXbyZcg&s",
    descricao: "é um jogo competitivo que mistura futebol, caos automobilístico e física realista.",
},
{
    titulo: "Alien Isolation",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XY_1L18M7bsrj7meNHfHjLMsWzYx1P6_LQ&s",
    descricao: "é um jogo de terror e sobrevivência em primeira pessoa onde você controla Amanda Ripley, filha de Ellen Ripley (do filme clássico). Presa em uma estação espacial abandonada, você deve fugir de um único Xenomorfo implacável.",
},
{
    titulo: "Resident Evil 7: Biohazard",
    imagem: "https://store-images.s-microsoft.com/image/apps.38644.71433286839923669.1250138a-286b-4b3f-8367-3d201ae45ae9.a08b2cbe-68eb-4c9e-a196-78097193172f",
    descricao: "é um jogo de terror e sobrevivência que se passa na primeira pessoa. Você controla Ethan Winters. Ele procura a sua esposa desaparecida há três anos, Mia."
},
{
    titulo: "Resident Evil 4",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOdn-mat1iV5T4HNZYoWi778Fo08Fm2Hi4Q&s",
    descricao: "é um jogo de terror e ação onde você controla o agente Leon S. Kennedy. Sua missão é salvar Ashley, a filha do presidente dos Estados Unidos.",
},
{
    titulo: "Super Mario Odyssey",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPApul23xDtWBB_fMtGgaio2_mrFk8wwuQUQ&s",
    descricao: "",
},
{
    titulo: "Apex Legends",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/a/ad/Apex_legends_capa.jpg",
    descricao: "Battle Royale",
},
]


const listaJogos = document.getElementById("listaJogos");

function mostrarJogos(lista) {
    listaJogos.innerHTML = "";

    lista.forEach(jogo => {
        listaJogos.innerHTML += `
        <div class="col-md-4">
            <div class="card card-serie h-100">
                <img src="${jogo.imagem}" class="card-img-top">
                <div class="card-body">
                    <h3>${jogo.titulo}</h3>
                    <p>${jogo.descricao}</p>
                    <button class="btn btn-dark" onclick="verDetalhes('${jogo.titulo}')">
                        Ver detalhes
                    </button>
                </div>
            </div>
        </div>
        `;
    });
}


mostrarJogos(jogos)
function verDetalhes(titulo) {
    const jogoEncontrado = jogos.find(f => f.titulo === titulo);

    Swal.fire({
        title: jogoEncontrado ? jogoEncontrado.titulo : "Detalhes",
        text: jogoEncontrado && jogoEncontrado.descricao ? jogoEncontrado.descricao : "Descrição não disponível.",
        icon: "info"
    }) 
}

