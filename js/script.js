
hamburger = document.querySelector(".hamburger")

hamburger.onclick = function () {
    navBar = document.querySelector(".main-text")
    navBar.classList.toggle("active");
}