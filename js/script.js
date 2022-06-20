let menu = document.querySelector("#menu-item");
let navlist = document.querySelector(".navlist");

menu.addEventListener("click", function () {
    navlist.classList.toggle("active");
});

window.onscroll = () => {
    navlist.classList.remove("active");
};