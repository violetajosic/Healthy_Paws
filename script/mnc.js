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
var petInput = document.querySelector(".petInput"); // uzima se referenca na polje za unos godina
var mncConverted = document.querySelector(".mncConverted"); // ovde će se prikazivati izračunato
var speciesInput = document.querySelector(".speciesInput").value; // input vrste
var vetHeadingInput = document.querySelector(".vetHeadingInput").value; //input imena

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

function mnc() {
    var imageError = document.getElementById("imageError");
    var nameError = document.getElementById("nameError");
    var speciesError = document.getElementById("speciesError");
    var ageError = document.getElementById("ageError");
    var petInput = document.querySelector(".petInput");
    var speciesInput = document.querySelector(".speciesInput").value;
    var vetHeadingInput = document.querySelector(".vetHeadingInput").value;

    imageError.innerText = "";
    imageError.style.color = "";
    nameError.innerText = "";
    nameError.style.color = "";
    speciesError.innerText = "";
    speciesError.style.color = "";
    ageError.innerText = "";
    ageError.style.color = "";

    var selectedImage = document.getElementById("selectedImage");

    if (!selectedImage.src || selectedImage.src.endsWith("uploadImg.jpg")) {
        imageError.innerText = "An image must be chosen and it must be in .jpg format.";
        imageError.style.color = "red";
    }
    if (!vetHeadingInput.trim() || !vetHeadingInput.includes("-")) {
        nameError.innerText = "Pet name and owner name must be separated by - sign.";
        nameError.style.color = "red";
    } else {
        const parts = vetHeadingInput.split("-");
        if (parts.length < 2 || !parts[1].trim()) {
            nameError.innerText = "After the '-' sign owner name should be written.";
            nameError.style.color = "red";
        }
    }
    if (!speciesInput.trim()) {
        speciesError.innerText = "This field is required.";
        speciesError.style.color = "red";
    }
    if (!petInput || !petInput.value.trim() || isNaN(petInput.value.trim())) {
        ageError.innerText = "This field is required and must contain only numeric values.";
        ageError.style.color = "red";
    }

    if (
        imageError.innerText === "" &&
        nameError.innerText === "" &&
        speciesError.innerText === "" &&
        ageError.innerText === ""
    ) {
        // Pošalji podatke na server koristeći AJAX
        $.ajax({
            type: 'POST',
            url: 'mnc.php',
            data: {
                mncButtonFunction: true,
                vetHeadingInput1: vetHeadingInput,
                vetSpeciesInput: speciesInput,
                petAgeInput1: petInput.value,
                mncConverted: 0,  // Ovde postavi vrednost koja vam je potrebna za age_converted
                // Možete dodati ostale podatke koje želite poslati
            },
            success: function(response) {
                // Ovde možete obraditi odgovor sa servera, ako je potrebno
                console.log(response);
            },
            error: function(error) {
                // Ovde možete obraditi greške koje se dese tokom AJAX poziva
                console.log(error);
            }
        });
    }
}