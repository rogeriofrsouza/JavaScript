//Variáveis globais
let res = window.document.getElementById('saida')
let computador = 0
let jogador = 0

//Sorteio do número
function sortear() {
  let min = 1
  let max = 100
  let dif = max - min
  let aleatorio = Math.random()
  computador = min + Math.trunc(dif * aleatorio)
}

//Análise da opção
function analisar(j, c) {
  if (j > c) {
    return 'MENOR'
  } else if (j < c) {
    return 'MAIOR'
  } else {
    return 'IGUAL'
  }
}

//Tentar adivinhar
function jogar() {
  jogador = Number(window.prompt('Qual é o seu palpite?'))
  let resultado = analisar(jogador, computador)

  //Prints
  if (jogador != computador) {
    res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>${resultado}</strong>!</p>`
  } else {
    res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor <strong>${computador}</strong>!</p>`

    //Button
    let btn = window.document.querySelector('button#botao')
    btn.style.visibility = 'hidden'
  }
}
