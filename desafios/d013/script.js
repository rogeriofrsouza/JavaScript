function verificar() {
    let nome = window.prompt('Qual é o nome do(a) aluno(a)?')
    let nota1 = Number(window.prompt(`Primeira nota de ${nome}: `))
    let nota2 = Number(window.prompt(`Segunda nota de ${nome}: `))
    let output = document.querySelector('#saida')

    let media = (nota1 + nota2) / 2

    output.innerHTML = `<h2>Analisando a situação de ${nome}...</h2>`
    output.innerHTML += `<p>Com as notas ${nota1.toFixed(1).replace('.', ',')} e ${nota2.toFixed(1).replace('.', ',')} a média é: <strong>${media.toFixed(1).replace('.', ',')}</strong></p>`

    if (media > 6 && media <= 10) {
        output.innerHTML += `<p>Com média acima de 6,0 o(a) aluno(a) está <mark id="green"><strong>APROVADO</strong></mark></p>`

    } else if (media >= 3 && media <= 6 ) {
        output.innerHTML += `<p>Com média entre 6,0 e 3,0 o(a) aluno(a) está em <mark id="yellow"><strong>RECUPERAÇÃO</strong></mark></p>`

    } else if (media < 3) {
        output.innerHTML += `<p>Com média abaixo de 3,0 o(a) aluno(a) está <mark id="red"><strong>REPROVADO</strong></mark></p>`

    } else {
        output.innerHTML = '<strong>ERRO</strong>: Tente novamente :('
    }
}