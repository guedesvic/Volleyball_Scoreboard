let nomeTimeA = prompt('Digite o nome do seu time A');
let nomeTimeB = prompt('Digite o nome do seu time B');
let pontoA = 0;
let pontoB = 0;
let setA = 0;
let setB = 0;

const nomeA_HTML = document.getElementById('nomeTimeA');
const nomeB_HTML = document.getElementById('nomeTimeB');
const pontoA_HTML = document.getElementById('pontuacaoA');
const pontoB_HTML = document.getElementById('pontuacaoB');
const setA_HTML = document.getElementById('setA');
const setB_HTML = document.getElementById('setB');

nomeA_HTML.innerText = nomeTimeA;
nomeB_HTML.innerText = nomeTimeB;
pontoA_HTML.innerText = pontoA;
pontoB_HTML.innerText = pontoB;

pontoA_HTML.addEventListener('click', function () {
  pontoA = pontoA + 1;
  pontoA_HTML.innerText = pontoA;
  verificarFimDoSet();
})

pontoB_HTML.addEventListener('click', function () {
  pontoB = pontoB + 1;
  pontoB_HTML.innerText = pontoB;
  verificarFimDoSet();
})

function verificarFimDoSet() {
  if (pontoA >= 24 && pontoA - pontoB >= 2) {
    setA = setA + 1
    setA_HTML.innerText = setA;
    
    alert(`O time ${nomeTimeA} ganhou o set!`)

    zerarOPlacarDePontos();

    verificarFimDeJogo();

  } else if (pontoB >= 24 && pontoB - pontoA >= 2) {
    setB = setB + 1
    setB_HTML.innerText = setB;

    alert(`O time ${nomeTimeB} ganhou o set!`)

    zerarOPlacarDePontos();

    verificarFimDeJogo();
  }
}

function zerarOPlacarDePontos() {
  pontoA = 0;
  pontoB = 0;
  
  pontoA_HTML.innerText = pontoA;
  pontoB_HTML.innerText = pontoB;
}

function verificarFimDeJogo() {
  if (setA === 2 || setB === 2) {
    alert("Fim de jogo!")
  }
}