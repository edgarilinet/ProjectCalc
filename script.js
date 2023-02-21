
let tempNum = '';
let display = document.getElementById('disp');
let history = document.getElementById('history');
display.textContent = "";
history.textContent = "Введите пример";


function histClick() {
    let str = history.textContent;
    str = str.slice(str.indexOf('=') + 1, str.length - 1);
    number(str);
}

function number(sim) {
    tempNum = tempNum + sim;
    display.textContent = tempNum
}

function allClean() {
    display.textContent = "";
    document.getElementById("disp-itog").textContent = "";
    i = 0;
    tempNum = "";
    arLen.allClean;
    array.allClean;
    console.clear();
}

function backSpace() {
    tempNum = tempNum.slice(0, -1);
    display.textContent = tempNum;
}

function changeTheSign() {
    let firstNum = tempNum.slice(0, 1)
    console.log(firstNum);
    if (firstNum != "-") {
        tempNum = '-' + tempNum;
        display.textContent = tempNum;
    } else {
        tempNum = tempNum.substring(1)
        display.textContent = tempNum;
    }
}
let array = new Array();
let arLen = new Array();
let operAr = new Array();
let i = 0;
function oper(operator) {
    if (tempNum.slice(tempNum.length - 1) == '+ ') {
        alert("уже введен плюс");

    }
    if (operator != '=') {
        array[i] = tempNum.slice(arLen[i - 1] + 1, tempNum.length);
        operAr[i] = operator;
        arLen[i] = tempNum.length;
        i++;
        display.textContent = tempNum = tempNum + operator;

    } else if (operator == "=") {
        array[i] = tempNum.slice(arLen[i - 1] + 1, tempNum.length);
        console.log(` array = ${array}`);
        console.log(` operAr = ${operAr}`);
        console.log(` arLen = ${arLen}`);
        console.log(` itog = ${itog(array, operAr)}`)
    }
}

function itog(arrChislo, arrOper) {
    console.log(' >>itog started>>');
    let  sum = Number(arrChislo[0]);
    for (let l = 0; l < arrOper.length; l++) {
        console.log(`>> l = ${l}, OperLenght = ${arrOper.length}, sum = ${sum}`)
        switch (arrOper[l]){
            case '+': 
                console.log(`sum = ${sum} = ${Number(arrChislo[l])} + ${Number(arrChislo[l + 1])} `)
                sum += Number(arrChislo[l + 1]);
                break;
            case '-': 
                sum -= Number(arrChislo[l + 1]);
                break;
            case '*': 
                sum *= Number(arrChislo[l + 1]);
                break;
            case '/': 
                sum /= Number(arrChislo[l + 1]);
                break;
        }
    }
    return sum;
}