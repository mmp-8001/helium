const overlay = document.getElementById("overlay")
const success = document.getElementById("success")
const error = document.getElementById("error")
const buttons = overlay.querySelectorAll("button")


for (let button of buttons) {
    button.onclick = function () {
        button.parentElement.classList.remove("occur")
        button.parentElement.parentElement.classList.remove("trigger")
    }
}

export function notif(type, msg) {
    if (type === "success") {
        overlay.classList.add("trigger")
        success.classList.add("occur")
    } else if (type === "error") {
        overlay.classList.add("trigger")
        error.querySelectorAll(".head")[0].innerHTML = msg
        error.classList.add("occur")
    }
}