var exitBtn = document.querySelector(".exitBtn");
var exitBtnHover = document.querySelector(".exitBtnHover");

if (exitBtn !== null && exitBtnHover !== null) {

    exitBtn.addEventListener("mouseover", function (event) {
    exitBtn.style.display = "none";
    exitBtnHover.style.display = "flex";
    });

    exitBtn.addEventListener("mouseout", function (event) {
    exitBtnHover.style.display = "none";
    exitBtn.style.display = "flex";
    });

}