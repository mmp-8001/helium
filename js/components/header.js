const man1 = document.getElementById("man1");
const man2 = document.getElementById("man2");
const man3 = document.getElementById("man3");
const man4 = document.getElementById("man4");
var vy = document.body.clientHeight;
var vx = document.body.clientWidth;
const touch = true;

function generateAnimation(x, y) {
    let dx = ((vx / 2 - x) / vx) * 1.6;
    let dy = ((vy / 2 - y) / vy) * 0.9;

    man1.style.transform = "rotate(" + Math.abs((dy - dx) * 10) + "deg)"
    man2.style.transform = "rotate(" + Math.abs((dy + dx) * 15) + "deg)"
    man3.style.transform = "rotate(" + Math.abs((dy - dx) * 20) + "deg)"
    man4.style.transform = "rotate(" + Math.abs((dy + dx) * 25) + "deg)"
}

window.addEventListener("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;
    generateAnimation(x, y);
});

window.addEventListener("touchstart", function (e) {
    touch = true;
    let x = e.touches[0].pageX;
    let y = e.touches[0].pageY;
    generateAnimation(x, y);
});

window.addEventListener("touchmove", function (e) {
    if (!touch) return;
    let x = e.touches[0].pageX;
    let y = e.touches[0].pageY;
    generateAnimation(x, y);
    e.preventDefault();
});

window.addEventListener("touchend", function (e) {
    touch = false;
});

window.addEventListener("resize", function () {
    vy = document.body.clientHeight;
    vx = document.body.clientWidth;
});
