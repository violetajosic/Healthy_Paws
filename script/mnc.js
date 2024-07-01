//upload image
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
    } else {
        mncConverted.textContent = 15 + 9 * (petAge - 1);
    }
});

document.querySelector(".speciesInput").addEventListener("input", function() {
    speciesInput = document.querySelector(".speciesInput").value; 
    mncConverted.textContent = "0";
});
function mnc() {
    var selectedImage = document.getElementById("selectedImage");
    var vetHeadingInput = document.querySelector(".vetHeadingInput").value;
    var vetOwnerInput = document.querySelector(".vetOwnerInput").value;
    var speciesInput = document.querySelector(".speciesInput").value;
    var petInput = document.querySelector(".petInput").value;

    var imageError = document.getElementById("imageError");
    var nameError = document.getElementById("nameError");
    var ownerError = document.getElementById("ownerError");
    var speciesError = document.getElementById("speciesError");
    var ageError = document.getElementById("ageError");

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValid = true;

    if (!selectedImage.src || selectedImage.src.endsWith("uploadImg.jpg")) {
        imageError.innerText = "An image must be chosen and it must be in .jpg format.";
        imageError.style.color = "red";
        isValid = false;
    } else {
        imageError.innerText = "✅";
    }
    if (!vetHeadingInput.trim()) {
        nameError.innerText = "This field is required.";
        nameError.style.color = "red";
        isValid = false;
    } else {
        nameError.innerText = "✅";
    }
    if (!vetOwnerInput.trim()) {
        ownerError.innerText = "This field is required.";
        ownerError.style.color = "red";
        isValid = false;
    } else if (!emailRegex.test(vetOwnerInput)) {
        ownerError.innerText = "Invalid email address.";
        ownerError.style.color = "red";
        isValid = false;
    } else {
        ownerError.innerText = "✅";
    }
    if (!speciesInput.trim()) {
        speciesError.innerText = "This field is required.";
        speciesError.style.color = "red";
        isValid = false;
    } else {
        speciesError.innerText = "✅";
    }
    if (!petInput || !petInput.value.trim() || isNaN(petInput.value.trim())) {
        ageError.innerText = "This field is required and must contain only numeric values.";
        ageError.style.color = "red";
        isValid = false;
    } else {
        ageError.innerText = "✅";
    }

    return isValid;
}