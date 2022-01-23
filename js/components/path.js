// set height of the svg path as constant
const svg = document.getElementById("svgPath");
const svg2 = document.getElementById("svgPath2");
const main = document.getElementById("main");
const content = document.getElementById("content");
const page1 = document.getElementById("page1");

const length = svg.getTotalLength();

// start positioning of svg drawing
svg.style.strokeDasharray = length;
svg2.style.strokeDasharray = length;

// hide svg before scrolling starts
svg.style.strokeDashoffset = length;
svg2.style.strokeDashoffset = length;

function pathdraw() {
    var scrollpercent = (main.scrollTop - main.clientWidth / 100 + content.scrollTop) / (main.scrollHeight - main.clientWidth / 100 - main.clientHeight);
    var draw = length * scrollpercent;
    svg.style.opacity = 1;
    svg2.style.opacity = 1;

// Reverse the drawing when scroll upwards
    svg.style.strokeDashoffset = length - draw;
    svg2.style.strokeDashoffset = length - draw;
}

main.addEventListener("scroll", function () {
    pathdraw()
});


