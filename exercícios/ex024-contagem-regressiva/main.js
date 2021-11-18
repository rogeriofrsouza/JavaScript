let output = document.querySelector('#output')

function contar() {
    let h2Element = document.createElement('h2')
    h2Element.textContent = 'Contagem regressiva de 10 a 1'
    output.appendChild(h2Element)

    let pElement = document.createElement('p')

    for (let cont = 10; cont >= 1; cont--) {
        pElement.innerHTML += `${cont} \u{1F449} `
    }
    pElement.innerHTML += ` \u{1F3C1}`
    output.appendChild(pElement)
}
