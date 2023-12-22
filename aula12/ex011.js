// no video aula, o professor usou o ex de poder votar ou nao, mas como ca em portugal e diferente, eu vou usar idade de trabalho


var idade = 35
if (idade < 16){
    console.log('Nao pode trabalhar')
} else {
    if(idade >= 16 && idade < 18){
        console.log('Pode trabalhar com autorizacao dos pais')
    } else {
        console.log('Pode trabalhar')
    }
}