//Variables
let season = ''
let output = window.document.getElementById('output')

function showSeason() {
    let month = window.prompt('Digite o mês em extenso (ex: Setembro)')

    switch (month.toLowerCase()) {
        case 'outubro':
        case 'novembro':
        case 'dezembro':
            season = 'PRIMAVERA'
            break
        case 'janeiro':
        case 'fevereiro':
        case 'feveireiro':
        case 'março':
        case 'marco':
            season = 'VERÃO'
            if (month == 'feveireiro') {
                window.alert('Ops, identifiquei um erro de escrita, mas já corrigi para você :)')
                month = 'fevereiro'
            } else if (month == 'marco') {
                window.alert('Ops, identifiquei um erro de escrita, mas já corrigi para você :)')
                month = 'março'
            }
            break
        case 'abril':
        case 'maio':
        case 'junho':
            season = 'OUTONO'
            break
        case 'julho':
        case 'agosto':
        case 'setembro':
            season = 'INVERNO'
            break
        default:
            season = 'INDEFINIDA'
            window.alert('ERRO: tente novamente!')
    }

    output.innerHTML = `No mês de <mark>${month}</mark>, estamos na estação <mark><strong>${season}</strong></mark>.`
}
