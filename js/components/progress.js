const progress = document.getElementById("progress-bar")

function init() {
    progress.parentElement.style = "block"
}

function progress(x) {
    progress.style.width = x + "%"
}

function destroy() {
    progress.style.width = "0"
    progress.parentElement.style = "none"
}