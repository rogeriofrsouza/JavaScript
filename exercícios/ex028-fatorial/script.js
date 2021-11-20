function fatorial() {
    let num = Number(document.querySelector('#fnum').value)
    let output = document.querySelector('#saida')

    let h2Element = document.createElement('h2')
    h2Element.textContent = `Calculando ${num}!`
    output.appendChild(h2Element)

    let fat = 1
    while (num >= 1) {
        if (num != 1) {
            output.innerHTML += `${num} x `
        } else if (num == 1) {
            output.innerHTML += `${num} = <strong>${fat}</strong>`
        }
        fat = fat * num
        num--
    }
}