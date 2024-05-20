
const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById("colorBox");
    const changeColorButton = document.getElementById("changeColorButton");

    changeColorButton.addEventListener("click", () => {
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
    });
});


