const img1 = document.querySelector('#img01 > img');
const img2 = document.querySelector('#img02 > img');
const img3 = document.querySelector('#img03 > img');
const img4 = document.querySelector('#img04 > img');
// ----------------------------------------------------- Variaveis imagem (acima) e nome (abaixo)
const nome1 = document.querySelector('#img01 > h2');
const nome2 = document.querySelector('#img02 > h2');
const nome3 = document.querySelector('#img03 > h2');
const nome4 = document.querySelector('#img04 > h2');

gerarPersona = () => {
  return Math.floor(Math.random() * 671) + 1;
};

function Atualizar() {
    window.location.reload();
}

personagem = () => {
  return fetch(
    `https://rickandmortyapi.com/api/character/${gerarPersona()},${gerarPersona()},${gerarPersona()},${gerarPersona()}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    },
  )
    .then((response) => response.json())
    .then((data) => {
      img1.src = data[0].image;
      nome1.innerHTML = data[0].name;
      img2.src = data[1].image;
      nome2.innerHTML = data[1].name;
      img3.src = data[2].image;
      nome3.innerHTML = data[2].name;
      img4.src = data[3].image;
      nome4.innerHTML = data[3].name;
    });
};

window.addEventListener('load', () => {
  personagem();
})
document.onload = personagem();