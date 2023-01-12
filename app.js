let cir = document.querySelector(".circle")

const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    cir.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}
cir.addEventListener("click", setBg);
setBg();