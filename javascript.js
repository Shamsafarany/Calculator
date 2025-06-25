const screen = document.querySelector("p");
const numbers = document.querySelectorAll(".number");
const signs = document.querySelectorAll(".sign");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
let start = false;
function add (op1, op2) {
    return op1 + op2;
}

function subtract(op1, op2) {
    return op1 - op2;
}

function multiply(op1, op2) {
    return op1 * op2;
}

function divide (op1, op2) {
    if (op2 === 0) {
       console.log("divide by 0");
       return null;
    } else {
        return Math.round((op1 / op2 * 100))/ 100;
    }
}

let op1, op2, op, res;
function operate (op1, op2, op) {
    switch(op) {
        case '+': res = add(op1, op2);
                  return res;
        case '-': res = subtract(op1,op2);
                  return res;
        case 'x': res = multiply(op1,op2);
                  return res;
        case '/': res = divide(op1,op2);
                  return res;
    }
}

for (let i = 0; i < numbers.length; i++) {  
    numbers[i].addEventListener("click", () => {
        if (start === false) {
            screen.innerHTML = "";
            start = true;
        }
        if(screen.textContent.length < 10) {
            screen.textContent += `${numbers[i].textContent}`;
        }
        
    })
}
for (let i = 0; i < signs.length; i++){
    signs[i].addEventListener("click", () => {
        if (!screen.classList.contains("flag")){
            screen.textContent += `${signs[i].textContent}`;
            screen.classList.add("flag");
        } else {
            getOperators();
            let currentRes = operate(op1, op2, op);
            console.log(currentRes);
            currentRes = Math.round((currentRes* 100))/ 100;
            if (currentRes === null) {
                screen.textContent= "Error!";
            } else {
                screen.innerHTML = `=${currentRes}`;
            }
            screen.textContent += `${signs[i].textContent}`;
            screen.classList.add("flag");
            start = true;
        }
            
    })
}

equal.addEventListener("click", () => {
    getOperators();
    let currentRes = operate(op1, op2, op);
    console.log(currentRes);
    currentRes = Math.round((currentRes* 100))/ 100;
    if (currentRes === null) {
        screen.textContent= "Error!";
    } else {
        screen.innerHTML = `=${currentRes}`;
    }
    screen.classList.remove("flag");
    start = true;
});

clear.addEventListener("click", ()=>{
    screen.innerHTML = "0";
    start = false;
    screen.classList.remove("flag");
})

function getOperators(){
    let content = screen.innerHTML;
    console.log(content);
    let match= screen.innerHTML.match(/[+\-x/]/);
    op = match[0];
    if (content.startsWith("=")) {
        content = content.slice(1);
        console.log(content);
    } 
    op1 = Number(content.substring(0, content.search(`\\${op}`)));
    op2 = Number((content.substring(content.search(`\\${op}`) + 1)));
    if (op === null || op1 === null || op2 === null) {
        console.log("missing");
        return;
    }
    console.log(op);
    console.log(op1);
    console.log(op2);
}



