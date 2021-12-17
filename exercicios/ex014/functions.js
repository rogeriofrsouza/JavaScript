function info() {
    //Variáveis
    let agora = new Date   //Informações do sistema
    let saida = window.document.getElementById('saida')
    
    //Prints
    saida.innerHTML = `<p>O que eu recebi do sistema foi: <mark>${agora}</mark></p>`
}
