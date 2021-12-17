function iniciar() {
  //Variáveis
  let agora = new Date()
  let ano_atual = agora.getFullYear()

  let ano_nasc = Number(window.prompt('Em que ano você nasceu?'))
  let idade = ano_atual - ano_nasc

  //Prints
  let saida = window.document.getElementById('saida')
  saida.innerHTML = `<p>Quem nasceu em ${ano_nasc} vai completar <strong style='color:red;'>${idade} anos</strong> em ${ano_atual} \u{1F973}</p>`
}
