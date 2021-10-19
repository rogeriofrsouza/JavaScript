//Analisa se a opção é maior ou menor que o num
function analisar(op, n) {
  if (op > n) {
    return 'MENOR'
  } else if (op < n) {
    return 'MAIOR'
  } else if (op == n) {
    return 'IGUAL'
  }
}

function jogar() {
  //Variáveis
  let min = 1
  let max = 100
  let dif = max - min
  let aleatorio = Math.random()
  var num = min + Math.trunc(dif * aleatorio)

  var opcao = Number(window.prompt('Qual é o seu palpite?'))
  var resultado = analisar(opcao, num)

  //Prints
  let res = window.document.getElementById('saida')
  if (opcao != num) {
    res.innerHTML += `<p>Você falou ${opcao}. Meu número é <strong>${resultado}</strong>!</p>`
  } else {
    res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor <strong>${num}</strong>!</p>`
  }
  let btn = window.document.querySelector('button')
  btn = null
}
