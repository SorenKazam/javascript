function start(){
    var msgHora = document.querySelector('span#msgHora')
    var msg = document.querySelector('span#msg')
    var img = document.querySelector('img#img')
    var data = new Date()
    var hora = data.getHours()
    msgHora.textContent = `Agora sao ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        msg.textContent = 'Bom dia!'
        img.src = 'img/manha.jpg'
    } else if(hora >= 12 && hora < 18){
        // BOA TARDE
        msg.textContent = 'Boa tarde!'
        img.src = 'img/tarde.jpg'
    } else {
        //BOA NOITE
        msg.textContent = 'Boa Noite!'
        img.src = 'img/noite.jpg'
    }
}