let elements = document.getElementsByClassName("link")
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", evt => {
        let anotherElements = document.getElementsByClassName("link");
        for (let j = 0; j < anotherElements.length; j++) {
            anotherElements[j].classList.remove("active");
        }
        evt.currentTarget.classList.add("active")
    })
}