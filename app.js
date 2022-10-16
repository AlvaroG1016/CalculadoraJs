import {sum} from './suma.js'
import {Sub} from './resta.js' //se somvrea cuando no se ha utilizado 
import {multi} from './multi.js'
import {divi} from './divi.js'
document.querySelector('#btnCalcular').addEventListener('click', operar)

function operar(){
    let num1 = parseFloat( document.getElementById('num1').value)
    let num2 = parseFloat( document.getElementById('num2').value)
    let result 
    let operacion = document.getElementById('selectOper').value
    if (operacion == "Suma"){
        result = sum(num1, num2)
    }
    else if(operacion == "Resta"){
        result = Sub(num1, num2)
    }else if(operacion == "Multiplicacion"){
        result = multi(num1, num2)
    }else if(operacion == 'Division'){
        result = divi(num1, num2)
    }
    document.getElementById('resultado').value = result

}