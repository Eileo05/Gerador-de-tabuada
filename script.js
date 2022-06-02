function Gerar() {
    let num = document.getElementById('txtN')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor,digite um numero')
    } else {
        let item = document.createElement('option')
        let fconta = document.getElementsByName('radconta')
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (fconta[0].checked && c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} + ${c}= ${n + c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
         while (fconta[1].checked && c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c}= ${c * n}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

function Limpar(){
    location.reload()
}


