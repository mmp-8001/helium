// set height of the svg path as constant
const svg = document.getElementById("svgPath");
const main = document.getElementById("main");
const content = document.getElementById("content");
const page1 = document.getElementById("page1");

const length = svg.getTotalLength();

// start positioning of svg drawing
svg.style.strokeDasharray = length;

// hide svg before scrolling starts
svg.style.strokeDashoffset = length;

main.addEventListener("scroll", function () {
    var scrollpercent = (main.scrollTop + content.scrollTop) / (main.scrollHeight - main.clientHeight);
    var draw = length * scrollpercent;
    svg.style.opacity = 1;

    // Reverse the drawing when scroll upwards
    svg.style.strokeDashoffset = length - draw;
});

