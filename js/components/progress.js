const progress = document.getElementById("progress-bar")

export function init() {
    progress.parentElement.style.display = "block"
}

export function setProgress(x) {
    progress.style.width = x + "%"
}

export function destroy() {
    progress.style.width = "0"
    progress.parentElement.style.display = "none"
}