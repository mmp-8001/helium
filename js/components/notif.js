const overlay = document.getElementById("overlay")
const success = document.getElementById("success-msg")
const format = document.getElementById("format-error")
const fail = document.getElementById("failed-error")
const buttons = overlay.querySelectorAll("button")


for (let button of buttons) {
    button.onclick = function () {
        button.parentElement.classList.remove("occure")
        button.parentElement.parentElement.remove("trigger")
    }
}

function notif(type) {
    if (type === "success") {
        overlay.classList.add("trigger")
        success.classList.add("occur")
    } else if (type === "format") {
        overlay.classList.add("trigger")
        format.classList.add("occur")
    } else if (type === "failed") {
        overlay.classList.add("trigger")
        fail.classList.add("occur")
    }
}