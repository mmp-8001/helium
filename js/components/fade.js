let elementsArray = document.querySelectorAll(".tile");

const content = document.getElementById("content")
const main = document.getElementById("main")


for (let i = 0; i < elementsArray.length; i++) {
    let elem = elementsArray[i]
    elem.delayTime = 5;
}


main.addEventListener('scroll', fadeIn);

function fadeIn() {
    for (let i = 0; i < elementsArray.length; i++) {
        let elem = elementsArray[i]
        if (elem.delayTime === 0) {
            let distInView = elem.getBoundingClientRect().top - window.innerHeight - 100 + elem.getBoundingClientRect().height;
            elem.delayTime = 15;
            if (distInView < 0) {
                elem.classList.add("inView");

            } else {
                elem.classList.remove("inView");
            }
        }
        elem.delayTime--;
    }
}

fadeIn();