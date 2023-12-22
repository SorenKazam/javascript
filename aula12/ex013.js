var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem){
    case 0:
        console.log('Bom domingo')
        break
    case 1:
        console.log('Boa segunda feira')
        break
    case 2:
        console.log('Boa terca feira')
        break
    case 3:
        console.log('Boa quarta feira')
        break
    case 4:
        console.log('Boa quinta feira')
        break
    case 5:
        console.log('Boa sexta feira')
        break
    case 6:
        console.log('Bom sabado')
        break
    case 7:
        console.log('Bom domingo')
        break
    default:
        console.log('Nao sei que dia e hoje lmao')
        break
}