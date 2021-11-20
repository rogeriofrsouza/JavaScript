function contar() {
    let num = Number(document.getElementById('fnum').value)
    let output = document.getElementById('saida')
    
    if (num <= 0) {
        window.alert('ERRO: Digite um número positivo maior que 0')
    } else {
        let h2Element = document.createElement('h2')
    h2Element.textContent = `Contando de 0 até ${num}`
    output.appendChild(h2Element)

        let pElement = document.createElement('p')
        for (let i = 0; i <= num; i++) {
            pElement.innerHTML += `${i}  `
        }
        pElement.innerHTML += ` \u{1F3C1}`
        output.appendChild(pElement)
    }
}