let elementsArray = document.querySelectorAll(".tile");

const content = document.getElementById("content")
const main = document.getElementById("main")

main.addEventListener('scroll', fadeIn);

function fadeIn() {
    for (let i = 0; i < elementsArray.length; i++) {
        let elem = elementsArray[i]
        let distInView = elem.getBoundingClientRect().top - window.innerHeight - 100 + elem.getBoundingClientRect().height / 2;
        if (distInView < 0) {
            elem.classList.add("inView");

        } else {
            elem.classList.remove("inView");
        }
    }
}

fadeIn();