function media() {
    //Variáveis
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    let media = (n1 + n2) / 2

    //Cálculo da média
    let msg   //Cria uma variável vazia
    if (media >= 0 && media < 5) {
        msg = `Estude um pouco mais!\u{1F914}`
    } else if (media < 7) {
        msg = `Continue estudando!\u{1F9D0}`
    } else if (media < 10) {
        msg = `Ótimo!\u{1F642}`
    } else {
        msg = `Meus parabéns!\u{1F913}`
    }

    //Prints
    let res = window.document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <strong>${nome}</strong>...</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark></p>`
    res.innerHTML += `<p>A média final será <mark>${media.toFixed(1)}</mark></p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`
}