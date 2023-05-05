const display = document.querySelector("#disp");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == "ac") {
            display.innerText = "";
        }
        else if (item.id == "del") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        }
        else if(display.innerText != "" && item.id == "eq") {
            display.innerText = eval(display.innerText);
        }
        else if (display.innerText == "" && item.id == "eq") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
        }
        else {
            display.innerText += item.id;
        }
    };
});