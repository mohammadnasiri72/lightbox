var img = document.querySelectorAll(".img")
var page2 = document.querySelector(".page2")
var img2 = document.querySelector(".img2")
var btn = document.querySelector(".btn")
img.forEach(function (ev, i) {
    ev.addEventListener("click", function (e) {
        page2.style.opacity = 1
        page2.style.visibility = "visible"
        img2.style.backgroundImage = `url(assets/img/${i + 1}.jpg)`
    })
})
page2.addEventListener("click", function () {
    page2.style.opacity = 0
    page2.style.visibility = "hidden"
})