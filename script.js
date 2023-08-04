document.querySelector('.botao-pause').style.display = 'none'

let musicas = [ 
  {titulo:'Some Nights', artista:'Fun', src:'musicas/Fun- Some Nights.mp3', img:'imagens/some-nights_1.jpg'},
  {titulo:'Little Talks', artista:'Of Monsters and Men', src:'musicas/Of_Monsters_and_Men_Little_Talks.mp3', img:'imagens/monsters.jpg'},
  {titulo:'Riptide', artista:'Vance Joy', src:'musicas/Vance Joy - Riptide (Lyrics) (128 kbps).mp3', img:'imagens/vance-joy.jpg'},
  {titulo:'Ho Hey', artista:'The Lumineers', src:'musicas/The Lumineers - Ho Hey.mp3', img:'imagens/The_Lumineers_-_Ho_Hey.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

//Eventos

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

musica.addEventListener('loadeddata', duration);

document.querySelector('.anterior').addEventListener('click',() => {
  indexMusica--;
  if (indexMusica < 0)
  indexMusica = 2;
renderizarMusica(indexMusica);
})

document.querySelector('.proxima').addEventListener('click',() => {
  indexMusica++;
  if (indexMusica >2)
  indexMusica = 0
renderizarMusica(indexMusica);
musica.play()
})

//Funções 

function renderizarMusica(index){
musica.setAttribute('src', musicas[index].src);
musica.addEventListener('loadeddata', () => {
  nomeMusica.textContent = musicas[index].titulo;
  nomeArtista.textContent = musicas[index].artista;
  imagem.src = musicas[index].img;
  duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration)); 
});
}

function tocarMusica(){
  musica.play();
  document.querySelector('.botao-pause').style.display = 'block';
  document.querySelector('.botao-play').style.display = 'none';
}


function pausarMusica(){
  musica.pause();
  document.querySelector('.botao-pause').style.display = 'none';
  document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
  let barra = document.querySelector('progress');
  barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
  let tempoDecorrido = document.querySelector('.inicio');
  tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function duration(){
  duracaoMusica.textContent = segundosParaMinutos(Math.floor(currentMusic.duration));
}

function segundosParaMinutos(segundos){
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10){
      campoSegundos = '0' + campoSegundos;
  }

  return campoMinutos+':'+campoSegundos;
}

