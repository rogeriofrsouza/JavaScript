function tabuada() {
    let num = Number(document.querySelector('#fnum').value)
    let output = document.querySelector('#saida')

    let h2Element = document.createElement('h2')
    h2Element.textContent = `Tabuada de ${num}`
    output.appendChild(h2Element)

    for (let i = 0; i <= 10; i++) {
        if (i < 10) {
            output.innerHTML += `${num}&nbsp; x &nbsp;&nbsp;${i} &nbsp;= &nbsp;<strong>${num*i}</strong></br>`
        } else {
            output.innerHTML += `${num}&nbsp; x ${i} &nbsp;= &nbsp;<strong>${num*i}</strong></br>`
        }
    }
}
