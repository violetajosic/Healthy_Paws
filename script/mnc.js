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

//count age
//count age
var petInput = document.querySelector(".petInput"); // uzima se referenca na polje za unos godina
var mncConverted = document.querySelector(".mncConverted"); // ovde će se prikazivati izračunato
var speciesInput = document.querySelector(".speciesInput").value; // input vrste

petInput.addEventListener("input", function() {
    var petAge = parseInt(petInput.value); // konvertuje se vrednost unosa u broj

    if (speciesInput !== "cat") {
        if (petAge < 2) {
            mncConverted.textContent = petAge * 10.5;
        } else if (petAge >= 2) {
            mncConverted.textContent = 2 * 10.5 + (petAge - 2) * 4;
        }
    } else {
        mncConverted.textContent = 15 + 9 * (petAge - 1); //drugacije racunanje za macke
    }
});

// Dodajte dodatnu proveru za "speciesInput" kada se vrednost promeni
document.querySelector(".speciesInput").addEventListener("input", function() {
    speciesInput = document.querySelector(".speciesInput").value;
    mncConverted.textContent = "0"; // Resetujte prikaz prilikom promene vrste
});
