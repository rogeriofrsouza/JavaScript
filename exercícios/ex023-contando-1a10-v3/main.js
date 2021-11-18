let output = document.querySelector('#output')

function contar() {
    let h2Element = document.createElement('h2')
    h2Element.textContent = 'Números pares de 1 até 10'
    output.appendChild(h2Element)

    let pElement = document.createElement('p')

    for (let cont = 1; cont <= 10; cont++) {
        if (cont % 2 == 0) {
            pElement.innerHTML += `${cont} \u{1F449} `
        }
    }
    pElement.innerHTML += ` \u{1F3C1}`
    output.appendChild(pElement)
}
