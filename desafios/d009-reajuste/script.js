
function reajuste() {
    let res = window.document.getElementById('res')

    let nome = window.prompt('Qual é o nome do funcionário?')
    let salario = Number(window.prompt(`Qual é o salário de ${nome} (R$)?`))
    let reajuste = Number(window.prompt(`O salário de ${nome} será reajustado em qual porcentagem?`))

    let aumento = salario * (reajuste / 100)
    let salario_final = salario + aumento

    res.innerHTML = `<h2>${nome} recebeu um aumento salarial! \u{1F389}</h2>`
    res.innerHTML += '<hr/>'

    res.innerHTML += `<p>O salário atual era <strong>${salario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}</strong> \u{1F914}</p>`
    res.innerHTML += `<p>Com um aumento de <mark>${reajuste}%</mark>, o salário vai aumentar <strong>${aumento.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}</strong> \u{1F4B8}</p>`
    
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar <strong>${salario_final.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}</strong> \u{1F4B0}</p>`
}