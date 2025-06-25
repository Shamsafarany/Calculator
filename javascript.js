const screen = document.querySelector(".screen");
const numbers = document.querySelectorAll(".number");
const signs = document.querySelectorAll(".sign");
const equal = document.querySelector("#equal");

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
        console.log("Error: / by 0!");
    } else {
        return op1 / op2;
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
        screen.textContent += `${numbers[i].textContent}`;
    })
}
for (let i = 0; i < signs.length; i++){
    console.log(signs[i].textContent);
    signs[i].addEventListener("click", () => {
        screen.textContent += `${signs[i].textContent}`;
    })
}

equal.addEventListener("click", () => {
    let match= screen.innerHTML.match(/[+\-x/]/);
    op = match[0];
    op1 = Number(screen.innerHTML.substring(0, screen.innerHTML.search(`\\${op}`)));
    op2 = Number((screen.innerHTML.substring(screen.innerHTML.search(`\\${op}`) + 1)));
    screen.innerHTML = `=${operate(op1, op2, op)}`;
    start = false;
});

