//button hover
var indexBtn = document.querySelector(".indexBtn-abs");
var indexBtnImg = document.querySelector(".indexBtn");
var indexBtnImgHover = document.querySelector(".indexBtnHover");

// Add a click event listener - menjanje slike dugmeta na hover
if(indexBtn !== null && indexBtnImg !== null && indexBtnImgHover !== null){

    indexBtn.addEventListener("mouseover", function (event) {
    indexBtnImg.style.display = "none";
    indexBtnImgHover.style.display = "flex";
    });

    indexBtn.addEventListener("mouseout", function (event) {
    indexBtnImgHover.style.display = "none";
    indexBtnImg.style.display = "flex";
    });

}
