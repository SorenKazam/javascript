var calcBtn = document.getElementById('calc-btn')
calcBtn.addEventListener('click', calc)

function calc() {
    console.log('calc() function called')

    // get elements
    var txtn1 = document.querySelector('input#itxtn1')
    var txtn2 = document.querySelector('input#itxtn2')
    var res = document.querySelector('span#res')
    var operator = document.getElementById('operators')

    // verificar se elementos existem
    console.log('Localizando elementos...')
    if (!txtn1 || !txtn2 || !res || !calcBtn || !operator){
        console.error('Erro ao localizar elementos')
        if (!txtn1) {console.error('❌ Elemento txtn1 nao localizado')}
        if (!txtn2) {console.error('❌ Elemento txtn2 nao localizado')}
        if (!res) {console.error('❌ Elemento res nao localizado')}
        if (!calcBtn) {console.error('❌ Elemento calc nao localizado')}
        if (!operator) {console.error('❌ Elemento operator nao localizado')}
        return
    } else {
        console.log('✅ Todos os elementos foram encontrados!');
    }

    if (txtn1.value === '' || txtn2.value === ''){
        res.style.color = 'red';
        res.textContent = "Nao deixe os campos em branco!";
        return
    } else if (isNaN(txtn1.value) || isNaN(txtn2.value)){
        res.style.color = 'red';
        res.textContent = 'Apenas numeros!';
        return
    } else {
        console.log('✅ Todos os requesitos estao preenchidos');
        res.textContent = '';
        selectedOperator = operator.value
        n1 = Number(txtn1.value)
        n2 = Number(txtn2.value)
        console.log('Operador selecionado: ' + selectedOperator)
        console.log('Number 1: ' + n1)
        console.log('Number 2: ' + n2)
    }

    switch (selectedOperator) {
        case '':
            res.textContent = 'Selecione um operador!';
            return
        case 'soma':
            var result = n1 + n2;
            break;
        case 'subt':
            var result = n1 - n2;
            break;
        case 'divi':
            var result = n1 / n2;
            break;
        case 'mult':
            var result = n1 * n2;
            break;
        default:
            res.style.color = 'red'
            res.textContent = 'Operador nao reconhecido!';
            return;
        }
        
        res.style.color = 'black'
        res.textContent = 'Resultado: ' + result
}