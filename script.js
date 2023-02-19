
let tempNum = '';
let display = document.getElementById('disp');
let history = document.getElementById('history');
display.textContent = "";
history.textContent = "Введите пример";

function histClick(){
    let str = history.textContent;
    str = str.slice(str.indexOf('=')+1, str.length-1);
    number(str);
}

function number (sim){
    tempNum = tempNum + sim;
    display.textContent = tempNum
}

function allClean(){
    display.textContent = "";
    document.getElementById("disp-itog").textContent = "";
    i = 0;
    tempNum = "";
    arLen.allClean;
    array.allClean;
    console.clear();
}

function backSpace(){
    tempNum = tempNum.slice(0, -1);
    display.textContent = tempNum;
}

function changeTheSign() {
    let firstNum = tempNum.slice(0, 1)
    console.log(firstNum);
    if ( firstNum != "-") {
        tempNum = '-' + tempNum;
    display.textContent = tempNum;
    }else{
        tempNum = tempNum.substring(1)
        display.textContent = tempNum;
    }
}
let array = new Array();
let arLen = new Array();
let operAr = new Array();
let i = 0;
function oper(operator){
    if (tempNum.slice(tempNum.length - 1, tempNum.length) == '+ ') {
        alert( "уже введен плюс");

    }
    if (operator != '='){
        array[i] = tempNum.slice(arLen[i-1]+1, tempNum.length);
        operAr[i] = operator;
        console.log("i = " + i)
        console.log(array[i])
        console.log(operAr[i])
        arLen[i] = tempNum.length;
        console.log(arLen[i])
        i++;
        display.textContent = tempNum = tempNum + operator;

    } else if (operator == "="){
        array[i] = tempNum.slice(arLen[i-1]+1, tempNum.length);
        //let sum = itog(array, operAr);

        console.log(eval(tempNum));
        document.getElementById("disp-itog") .textContent = eval(tempNum);
        history.textContent = '\n' + display.textContent + '=' + eval(tempNum) + '\n';
        
    }
    
}

function itog (arrChislo, arrOper){
    // let sum = 0;
    // let arrChLen = arrChislo.length;
    // let arrOperLen = arrOper.length;
    // console.log(arrChLen + " arrChLen");
    // console.log(arrOperLen + " arrOper");
    // for (let i = 0; i < arrChLen; i++){
    //     sum = arrChislo[i] 
    // }
    console.log(eval(tempNum))
    display.textContent = eval(tempNum);
}