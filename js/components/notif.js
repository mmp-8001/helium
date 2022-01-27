const overlay = document.getElementById("overlay")
const success = document.getElementById("success")
const error = document.getElementById("error")
const buttons = overlay.querySelectorAll("button")


for (let button of buttons) {
    button.onclick = function () {
        button.parentElement.classList.remove("occure")
        button.parentElement.parentElement.remove("trigger")
    }
}

function notif(type, msg) {
    if (type === "success") {
        overlay.classList.add("trigger")
        success.classList.add("occur")
    } else if (type === "error") {
        overlay.classList.add("trigger")
        error.querySelectorAll(".head")[0].innerHTML = msg
        error.classList.add("occur")
    }
}

const myTimeout = setTimeout(notif, 500, "error", "salam salam salam salam salam");
