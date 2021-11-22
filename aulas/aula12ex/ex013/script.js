function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var dia = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()
    mes += 1

    //Horário
    if (minuto >= 10) {
        msg.innerHTML = `Horário atual ${hora}:${minuto}<br/>`    
    } else {
        msg.innerHTML = `Horário atual ${hora}:0${minuto}<br/>`
    }

    //Data
    if (mes <= 10){
        msg.innerHTML += `Data: ${dia}/${mes}/${ano}`    
    } else {
        msg.innerHTML += `Data: ${dia}/0${mes}/${ano}`
    }

    if (hora >= 0 && hora < 6) {
        // Boa madrugada!
        img.src = 'fotonoite.png'
        document.body.style.background = '#02080b'
    } else if (hora < 12) {
        // Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        // Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#e06d46'
    } else {
        // Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#10364a'
    }
}
