function verificar() {
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    
    var data = new Date()   
    var ano = data.getFullYear()   //Pega todos os dígitos do ano: 2021
    var idade = ano - Number(fano.value)
    
    if (fano.value.lenght == 0 || Number(fano.value) > ano || idade > 120 ) {
        window.alert('ERRO: Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var gênero = '' 
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade< 10) {
                img.src = 'foto-criança-m.png'
            } else if (idade < 24) {
                img.src = 'foto-jovem-m.png'
            } else if (idade < 50) {
                img.src = 'foto-adulto-m.png'
            } else {
                img.src = 'foto-idoso-m.png'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade< 10) {
                img.src = 'foto-criança-f.png'
            } else if (idade < 24) {
                img.src = 'foto-jovem-f.png'
            } else if (idade < 50) {
                img.src = 'foto-adulto-f.png'
            } else {
                img.src = 'foto-idoso-f.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}