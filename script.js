let string = "";
let input = document.querySelector('input');
let buttons = document.querySelectorAll("button");
let lastActionWasCalculation = false;
for (item of buttons) {
    item.addEventListener('click', (e) => {
        let a = e.target.textContent;
        try {
            if (lastActionWasCalculation && !isNaN(a)) {
                string = a;
                input.value = string;
                lastActionWasCalculation = false;
            } else if (a === "=") {
                string = eval(string);
                input.value = string;
                lastActionWasCalculation = true;
            } else if (a === "AC") {
                string = "";
                input.value = string;
                lastActionWasCalculation = false;
            } else if (a === 'X') {
                a = '*';
                string += a;
                input.value = string;
                lastActionWasCalculation = false;
            } else if (a === '÷') {
                a = '/';
                string += a;
                input.value = string;
                lastActionWasCalculation = false;
            } else if (a === '%') {
                string = (eval(string) / 100);
                input.value = string;
                lastActionWasCalculation = true;
            } else if (a === "DEL") {
                string = string.substring(0, string.length - 1);
                input.value = string;
                lastActionWasCalculation = false;
            } else {
                string += a;
                input.value = string;
                lastActionWasCalculation = false;
            }
        } catch (error) {
            input.value = "Error";
            string = "";
            lastActionWasCalculation = true;
        }
    })
}
