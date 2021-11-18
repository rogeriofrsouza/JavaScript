let output = document.querySelector('#output')

function contar() {
    let h2Element = document.createElement('h2')
    h2Element.textContent = 'Contando de 1 até 10, marcando os pares'
    output.appendChild(h2Element)

    let pElement = document.createElement('p')

    for (let cont = 1; cont <= 10; cont++) {
        if (cont % 2 == 0) {
            pElement.innerHTML += `<mark><strong> ${cont} </strong></mark>\u{1F449}`
        } else {
            pElement.innerHTML += ` ${cont} \u{1F449}`
        }
    }
    pElement.innerHTML += ` \u{1F3C1}`
    output.appendChild(pElement)
}
