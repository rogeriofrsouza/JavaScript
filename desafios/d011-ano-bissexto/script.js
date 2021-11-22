function verificar() {
    let fano = window.prompt('Qual é o ano que você quer verificar?')
    let output = document.querySelector('#saida')

    let h2Element = document.createElement('h2')
    h2Element.textContent = `Analisando o ano de ${fano}...`
    output.appendChild(h2Element)

    let pElement = document.createElement('p')
    pElement.innerHTML = `O ano de ${fano}: `
    
    if (fano % 4 == 0) {
        pElement.innerHTML += `<mark id="green"><strong>É BISSEXTO</strong></mark> \u{2705}`    
    } else {
        pElement.innerHTML += `<mark id="red"><strong>NÃO É BISSEXTO</strong></mark> \u{274C}`
    }
    output.appendChild(pElement)
}