const main = document.getElementById("main")
const pages = document.querySelectorAll('div[id^="page"]')
const links = document.querySelectorAll('a[href^="#"]')
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'
        });
    });
});

main.addEventListener('scroll', function (e) {
    for (let i = 0; i < pages.length; i++) {
        let elem = pages[i]
        if (elem.getBoundingClientRect().top <= 10 && elem.getBoundingClientRect().bottom >= 10) {
            links[i].classList.add("active");
            if (i === 5) links[6].classList.remove("active");
        } else {
            if (i === 5) links[6].classList.add("active");
            links[i].classList.remove("active");
        }
    }
});