/*Math.round(Math.random() * (max - min)) * multiple + min;
  
Math.round - Arredonda para o inteiro mais próximo
Math.trunc - Elimina a parte decimal
Math.floor - Arredonda para baixo
Math.ceil - Arredonda para cima
*/
function sorteio() {
  //Variáveis
  let min = 1
  let max = 100
  let dif = max - min
  let aleatorio = Math.random()    //Esta função gera um número Real aleatório entre 0 e 1
  let num = min + Math.trunc(dif * aleatorio)

  //Prints
  let saida = window.document.getElementById('saida')
  saida.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

//Limpa tela
function limpar() {
  saida.innerHTML = null
}
