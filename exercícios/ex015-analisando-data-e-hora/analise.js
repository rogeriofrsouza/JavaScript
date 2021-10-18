function analise() {
    //Arrays
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    let semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

    //Variáveis
    let agora = new Date
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let sem = agora.getDay()
    let hora = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()

    //Prints
    let res = window.document.getElementById('saida')
    res.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
    res.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`
    res.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
    res.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`
    res.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    res.innerHTML += `<p>Minutos: <mark>${minutos}</p></mark>`
    res.innerHTML += `<p>Segundos: <mark>${segundos}</p></mark>`
}