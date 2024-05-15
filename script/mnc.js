//upload image - treba da se cuva u bazu
function displaySelectedImage(event, elementId) {
    const selectedImage = document.getElementById(elementId);
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            selectedImage.src = e.target.result;
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}
//prestalo da radi
var petInput = document.getElementById("petAgeInput1");
var mncConverted = document.querySelector(".mncConverted");
var vetSpeciesInput = document.getElementById("vetSpeciesInput").value;

petInput.addEventListener("input", function() {
    var petAge = parseInt(petInput.value);

    if (speciesInput !== "cat") {
        if (petAge < 2) {
            mncConverted.textContent = petAge * 10.5;
        } else if (petAge >= 2) {
            mncConverted.textContent = 2 * 10.5 + (petAge - 2) * 4;
        }
    } else { //za macke
        mncConverted.textContent = 15 + 9 * (petAge - 1);
    }
});

document.querySelector(".speciesInput").addEventListener("input", function() {
    speciesInput = document.querySelector(".speciesInput").value; // OVO TREBA DA SE POSALJE U PHP POD NAZIVOM $mncConverted = $_POST['mncConverted']; tj kad se prvo ovde u js izvrsi
    mncConverted.textContent = "0";
});

function mnc() {
    var imageError = document.getElementById("imageError");
    var nameError = document.getElementById("nameError");
    var ownerError = document.getElementById("ownerError");
    var speciesError = document.getElementById("speciesError");
    var ageError = document.getElementById("ageError");
    var petInput = document.querySelector(".petInput");
    var speciesInput = document.querySelector(".speciesInput").value;
    var vetHeadingInput = document.querySelector(".vetHeadingInput").value;
    var vetOwnerInput = document.querySelector(".vetOwnerInput").value;

    imageError.innerText = "";
    imageError.style.color = "";
    nameError.innerText = "";
    nameError.style.color = "";
    ownerError.innerText = "";
    ownerError.style.color = "";
    speciesError.innerText = "";
    speciesError.style.color = "";
    ageError.innerText = "";
    ageError.style.color = "";

    var selectedImage = document.getElementById("selectedImage");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!selectedImage.src || selectedImage.src.endsWith("uploadImg.jpg")) {
        imageError.innerText = "An image must be chosen and it must be in .jpg format.";
        imageError.style.color = "red";
    }
    if (!vetHeadingInput.trim()) {
        nameError.innerText = "This field is required.";
        nameError.style.color = "red";
    }
    if (!vetOwnerInput.trim()) {
        ownerError.innerText = "This field is required.";
        ownerError.style.color = "red";
    }else if(!emailRegex.test(vetOwnerInput)) {
        ownerError.innerText = "Invalid email adress.";
        ownerError.style.color = "red";
    }
    if (!speciesInput.trim()) {
        speciesError.innerText = "This field is required.";
        speciesError.style.color = "red";
    }else if(!speciesInput.includes(" / ")){
        speciesError.innerText = "Please enter informations in this format: Species / breed";
        speciesError.style.color = "red";
    }
    if (!petInput || !petInput.value.trim() || isNaN(petInput.value.trim())) {
        ageError.innerText = "This field is required and must contain only numeric values.";
        ageError.style.color = "red";
    }

    if (
        imageError.innerText === "" &&
        nameError.innerText === "" &&
        ownerError.innerText === "" &&
        speciesError.innerText === "" &&
        ageError.innerText === ""
    ) {
        // poslati na php
        $.ajax({
            type: 'POST',
            url: 'mnc.php',
            data: {
                mncButtonFunction: true,
                vetHeadingInput1: vetHeadingInput,
                vetSpeciesInput: speciesInput,
                petAgeInput1: petInput.value,
                mncConverted: 0,  
                
            },
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            } //ukoliko je uspesno poslato na php i to je uneto u bazu, iz php treba da vrati ponovo u js (moze i novi fajl) koji ce da ispise na ekranu: uspesno ste napravili katalog, ovo je vas katalog id i da je id broj izvucen iz baze kao redni broj koji se automatski sam pravi
        });
    }
}