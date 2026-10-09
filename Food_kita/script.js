console.log("SCRIPT FOOD KITA BERHASIL");

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
})