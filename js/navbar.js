window.addEventListener("scroll", function(e) {
    let header = document.querySelector("Header");
    header.classList.toggle("abajo", window.scrollY > 0);
})

let navUl = document.getElementById("navUl");
let menuCheck = document.getElementById("check");
let header = document.querySelector("header");

menuCheck.addEventListener('change', (e) => {
    let body = document.querySelector("body");
    let html = document.querySelector("html");
    if(e.target.checked) {
        navUl.style.left = "0px";
        navUl.style.transition = "all 0.5s";
        body.classList.add("block-scroll")
        html.classList.add("block-scroll")
    } else {
        navUl.style.left = "-100%";
        navUl.style.transition = "all 0.5s";
        body.classList.remove("block-scroll")
        html.classList.remove("block-scroll")
    }
})

window.addEventListener('resize', () => {
    let body = document.querySelector("body");
    let html = document.querySelector("html");
    if(window.innerWidth >=768){
        navUl.style.left = "0";
        menuCheck.checked = false;
        navUl.style.transition = "all 0.5s";
        body.classList.remove("block-scroll")
        html.classList.remove("block-scroll")
    }else if(window.innerWidth < 768){
        navUl.style.left = "-100%";
        navUl.style.transition = "all 0s";
        body.classList.remove("block-scroll")
        html.classList.remove("block-scroll")
    }
});

