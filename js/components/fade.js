let elementsArray = document.querySelectorAll(".tile");

const content = document.getElementById("content")
const main = document.getElementById("main")
main.addEventListener('scroll', fadeIn);

function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]

        var distInView = elem.getBoundingClientRect().top - window.innerHeight + elem.getBoundingClientRect().height;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}

fadeIn();