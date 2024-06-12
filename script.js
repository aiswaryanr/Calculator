let str = "";
let btn = document.querySelectorAll("button");

//Function to handle button click on the screen

Array.from(btn).forEach((i) => {
    i.addEventListener('click', handleButtonClick);
});

function handleButtonClick (evt) {
    if (evt.target.innerHTML == '=') {
        str = eval(str);
        document.querySelector('input').value = str;
    } else if (evt.target.innerHTML == 'AC') {
        str = "";
        document.querySelector('input').value = str;
    } else if (evt.target.innerHTML == 'DEL') {
        str = str.slice(0, -1);
        document.querySelector('input').value = str;
    } else {
        str = str + evt.target.innerHTML;
        document.querySelector('input').value = str;
    }
}

//Function to handle keypress

function handleKeypress (evt) {
    const k = evt.key;
    if (k === 'Enter') {
        document.querySelector("#equal-to").click();
    } else if (k === 'Backspace') {
        document.querySelector("#delete").click();
    } else if (/[0-9*/+\-.]/.test(k)) {
        const button = document.querySelector(`.number-${k}`) || document.querySelector(`#full-stop`);
        if (button) {
            button.click(); 
        }
    }
}

document.addEventListener('keypress', handleKeypress);

