let displayValue='';

function Display(value){
    displayValue+=value;
    updateDisplay();
}

function Operator(operator){
    if(displayValue!==''&&!isNaN(displayValue[displayValue.length-1])){
        displayValue+=operator;
        updateDisplay();
    }
}

function Calculate(){
    try{
        const result=eval(displayValue);
        displayValue=result.toString();
        updateDisplay();
    }catch(error){
        dispatchEvent=Error;
        updateDisplay();
    }
}

function clearDisplay(){
    displayValue='';
    updateDisplay();
}

function Delete(){
    if(displayValue.length>0){
        displayValue=displayValue.slice(0,-1);
        updateDisplay();
    }
    else{
        updateDisplay();
    }

}

function updateDisplay(){
    document.getElementById('display').innerText=displayValue;
}