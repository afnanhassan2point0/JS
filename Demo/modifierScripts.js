

let isWhiteTheme = true;
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    if (isWhiteTheme) {
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        isWhiteTheme = false;
    }
    else {
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        isWhiteTheme = true;
    }
});