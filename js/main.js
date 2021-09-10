//loader

window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add('display')
    }, 3000);
};

//hide 'menu' and 'scroll up' buttons on scroll

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("hamburger").classList.remove("animation-hide");
        document.getElementById("scrollUp").classList.remove("animation-hide");
    } else {
        document.getElementById("hamburger").classList.add("animation-hide");
        document.getElementById("scrollUp").classList.add("animation-hide");
    }
    prevScrollpos = currentScrollPos;
};

//menu

document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
});

//scroll btn

document.querySelector('.scroll-top-btn').addEventListener('click', () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
});

//3D effect on cards

$(function() {
    $('.card').tilt({
        reset: false
    });
});


