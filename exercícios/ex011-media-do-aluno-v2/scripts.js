let bt = window.document.getElementById('bt')
bt.addEventListener('click', calcular)
let res = window.document.getElementById('res')

function calcular() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    let media = (n1 + n2) / 2

    res.innerHTML = `<p>Calculando a média final de <strong>${nome}</strong></p>.`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark></p>.`
    res.innerHTML += `<p>A média final será ${media.toFixed(0)}</p>.`

    if (media >= 0 && media < 5) {
        res.innerHTML += `A mensagem que temos é: Estude um pouco mais`
    }  

}