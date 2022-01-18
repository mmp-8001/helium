var text = document.querySelector(".text");
var vy = document.body.clientHeight;
var vx = document.body.clientWidth;
var touch = false;

function generateCssTextShadow(x, y) {
    let dx = ((vx / 2 - x) / vx) * 1.6;
    let dy = ((vy / 2 - y) / vy) * 0.9;
    let shadows = "";
    for (let i = 0; i < 256; i += 25) {
        shadows +=
            i * dx +
            "px " +
            i * dy +
            "px 20px rgba(" +
            i +
            ", 0, 0, .75)" +
            (i < 250 ? "," : "");
    }
    text.style.textShadow = shadows; // and apply it to the .text
}

window.addEventListener("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;
    generateCssTextShadow(x, y);
});

window.addEventListener("touchstart", function (e) {
    touch = true;
    let x = e.touches[0].pageX;
    let y = e.touches[0].pageY;
    generateCssTextShadow(x, y);
});

window.addEventListener("touchmove", function (e) {
    if (!touch) return;
    let x = e.touches[0].pageX;
    let y = e.touches[0].pageY;
    generateCssTextShadow(x, y);
    e.preventDefault();
});

window.addEventListener("touchend", function (e) {
    touch = false;
});

window.addEventListener("resize", function () {
    vy = document.body.clientHeight;
    vx = document.body.clientWidth;
});
