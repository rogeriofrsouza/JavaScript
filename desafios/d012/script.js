function verificar() {
    let oldPrice = Number(window.prompt('Qual era o preço anterior do produto?'))
    let newPrice = Number(window.prompt('Qual é o preço atual do produto?'))
    let output = window.document.querySelector('#saida')
    let format = { style: 'currency', currency: 'BRL' }
    
    output.innerHTML = '<h2>Analisando os valores informados...</h2>'
    output.innerHTML += `<p>O produto custava ${oldPrice.toLocaleString('pt-BR', format)} e agora custa ${newPrice.toLocaleString('pt-BR', format)}.</p>`

    if (oldPrice > newPrice) {
        let difPrice = oldPrice - newPrice
        let fluctuation = difPrice * 100 / oldPrice
        
        output.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        output.innerHTML += `<p>O preço caiu ${difPrice.toLocaleString('pt-BR', format)} em relação ao preço anterior.</p>`
        output.innerHTML += `<p>Uma variação de ${fluctuation.toFixed(2).replace('.', ',')}% pra baixo.</p>`

    } else if (oldPrice < newPrice) {
        difPrice = newPrice - oldPrice
        let fluctuation = difPrice * 100 / oldPrice

        output.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        output.innerHTML += `<p>O preço subiu ${difPrice.toLocaleString('pt-BR', format)} em relação ao preço anterior.</p>`
        output.innerHTML += `<p>Uma variação de ${fluctuation.toFixed(0).replace('.', ',')}% pra cima.</p>`

    } else {
        output.innerHTML += `<p>Hoje o produto está com o mesmo valor.</p>`
        output.innerHTML += `<p>O preço não apresenta alteração em relação ao preço anterior.</p>`
        output.innerHTML += `<p>Não há variação no novo valor.</p>`
    }
}