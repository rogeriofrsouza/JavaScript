function calcular() {
    let a = window.prompt('Qual é o valor de a?')
    let b = window.prompt('Qual é o valor de b?')
    let c = window.prompt('Qual é o valor de c?')

    let delta = Math.pow(b, 2) - (4 * a * c)

    let raizes = []
    raizes[0] = (-b + Math.sqrt(delta)) / 2 * a
    raizes[1] = (-b - Math.sqrt(delta)) / 2 * a
    raizes.sort(function(a, b){return a - b})

    let output = document.querySelector('#saida')
    output.innerHTML = `<p>A equação atual é: <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
    output.innerHTML += `<p>Delta: &Delta; = <mark><strong>${delta}</strong></mark></p>`


    if (delta == 0) {
        output.innerHTML += `<p>&Delta; igual a zero: <strong>S = <mark>{${raizes[0]}}</mark></strong></p>`
    } else if (delta < 0) {
        output.innerHTML += `<p>&Delta; negativo. A equação <strong>não</strong> possui raízes reais.</p>`
    } else {
        output.innerHTML += `<p>Raízes: <strong>S = <mark>{${raizes[0]}, ${raizes[1]}}</mark></strong></p>`
    }
}