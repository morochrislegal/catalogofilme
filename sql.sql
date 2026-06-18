create database catalogo;
use catalogo;

create table filmes (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);
create table series (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);
create table jogos (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

select * from filmes;
select * from series;
select * from jogos;

 insert into filmes (titulo, imagem, descricao)
    values ('Gente Grande', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3vk6keGwuFr3Ck1TNlt8nrXjSc58WK6xwQ&s', 'O filme acompanha cinco amigos de infância que se reencontram após trinta anos. Eles alugam uma casa no lago para passar o fim de semana do feriado de 4 de julho.'),
	('Batman','https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg','O Cavaleiro das Trevas'),
	('Homem-Aranha','https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg','O amigo da vizinhança'),
	('Minecraft','https://media.fstatic.com/N7WeSh0LNFtoL5cjCTmtk26k-i0=/full-fit-in/629x300/media/articles/main/2025/04/06/ff7ec16d-8161-4a24-bf4c-c64ad5a08591-596230497.jpg','O mundo quadrado'),
    ('Os Devoradores de Estrela','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMGavLRCvsiwbh7G2sg1heXElB1McGIeBZQ&s','Comendo as Estrela'),
    ('Michael Jackson','https://www.estadao.com.br/resizer/v2/JJEYVX3G3RA3VF7RCQHMWEUWPE.jpg?quality=80&auth=88cc49b168b2aa57b596f9274a0e6c35225e769eeeecbdf22e98e6f9e8cc44dd&width=380','O Rei do Pop'),
    ('Carros o Filme','https://cinemaweb.com.br/wp-content/uploads/2024/10/carros-4-vai-acontecer.jpg','Vrummm Vrummm Vrummmmmmmmm');
    
insert into series(titulo, imagem, descricao)
	value('Stranger Things','https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg','Mistérios sobrenaturais em Hawkins'),
	('The Last of Us','https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg','Sobrevivência em um mundo pós-apocalíptico'),
    ('Breaking Bad','https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg','A transformação de um professor em criminoso'),
    ('Invencível','https://cinemacomnerdice.wordpress.com/wp-content/uploads/2021/05/invencivel.jpg','O herói mais poderoso da Terra'),
    ('Supernatural','https://i.pinimg.com/originals/01/4f/0d/014f0de7ec13834005924c8e27a7270e.jpg','Os irmãos Sam e Dean Winchester, que viajam pelos EUA em um Chevrolet Impala 1967 caçando monstros, demônios e entidades paranormais.'),
    ('Loki','https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg','As aventuras do deus da trapaça'),
    ('The Boys','https://image.tmdb.org/t/p/w500/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg','Super-heróis nada convencionais');
    
insert into jogos(titulo, imagem, descricao)
    values('Minecraft','https://preview.redd.it/whats-the-name-of-this-texture-pack-from-the-games-cover-v0-4lv9qrcjjui71.jpg?width=640&crop=smart&auto=webp&s=ef037b75b942484e33bec8eb703e4fcf67da4fb6','O Minecraft é um jogo eletrônico de aventura do tipo sandbox onde os jogadores exploram um mundo aberto tridimensional feito de blocos'),
    ('Roblox','https://newzoo.com/wp-content/uploads/api/games/artworks/game--roblox.jpg','O Roblox é uma plataforma imersiva global de jogos e criação'),
    ('Dead By Daylight','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomiTc-P-2UzgUdxEBAY4hD5jD49DTCZtZwQ&s','é um jogo de terror multijogador onde 4 Sobreviventes tentam fugir de 1 Assassino.'),
    ('Ultrakill','https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Ultrakill_cover.png/250px-Ultrakill_cover.png','é um jogo de tiro em primeira pessoa (FPS) rápido e violento. Você controla V1, um robô que desce ao Inferno em busca de sangue para sobreviver.'),
    ('Grand Theft Auto 5','https://upload.wikimedia.org/wikipedia/pt/thumb/8/80/Grand_Theft_Auto_V_capa.png/250px-Grand_Theft_Auto_V_capa.png','Eles realizam assaltos perigosos em Los Santos para resolver problemas com o governo e máfias.'),
    ('Fortnite','https://m.media-amazon.com/images/M/MV5BMTZlMmIxM2EtN2Y4Zi00M2ZhLTk3NzgtNjJmZTU0MTQ3YjcwXkEyXkFqcGc@._V1_.jpg','é um jogo online multijogador e uma plataforma de entretenimento. A sua modalidade mais famosa é o Battle Royale.'),
    ('Rocket League','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCawmBYMLpQBznASj8gVr87dN_2ppXbyZcg&s','é um jogo competitivo que mistura futebol, caos automobilístico e física realista.'),
    ('Alien Isolation','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XY_1L18M7bsrj7meNHfHjLMsWzYx1P6_LQ&s','é um jogo de terror e sobrevivência em primeira pessoa onde você controla Amanda Ripley, filha de Ellen Ripley (do filme clássico). Presa em uma estação espacial abandonada, você deve fugir de um único Xenomorfo implacável.'),
    ('Resident Evil 7: Biohazard','https://store-images.s-microsoft.com/image/apps.38644.71433286839923669.1250138a-286b-4b3f-8367-3d201ae45ae9.a08b2cbe-68eb-4c9e-a196-78097193172f','é um jogo de terror e sobrevivência que se passa na primeira pessoa. Você controla Ethan Winters. Ele procura a sua esposa desaparecida há três anos, Mia.'),
    ('Resident Evil 4','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOdn-mat1iV5T4HNZYoWi778Fo08Fm2Hi4Q&s','é um jogo de terror e ação onde você controla o agente Leon S. Kennedy. Sua missão é salvar Ashley, a filha do presidente dos Estados Unidos.'),
	('Super Mario Odyssey','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPApul23xDtWBB_fMtGgaio2_mrFk8wwuQUQ&s',''),
    ('Apex Legends','https://upload.wikimedia.org/wikipedia/pt/a/ad/Apex_legends_capa.jpg','');
    