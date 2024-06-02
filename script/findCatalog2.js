$(document).ready(function() {
    // Check if data exists in local storage
    // Show required catalog
    var catalogData = localStorage.getItem('catalogData');
    var catalogID = localStorage.getItem('catalogID');

    if (catalogData && catalogID) {
        var jsonResponse = JSON.parse(catalogData);
        console.log('Image Data:', jsonResponse.image); //undefined
        var catalogNumber = document.querySelector("#catalogNumber");
        var catalogImage = document.querySelector("#catalogImage img");
        var mncInfoPetName = document.querySelector("#mncInfoPetName");
        var mncInfoOwnerEmail = document.querySelector("#mncInfoOwnerEmail");
        var mncInfoSpecies = document.querySelector("#mncInfoSpecies");
        var mncInfoPetAge = document.querySelector("#mncInfoPetAge");

        catalogNumber.innerHTML = catalogID;
        catalogNumber.style.color = 'black';

        // Construct the image URL using a Blob object
        var blob = new Blob([jsonResponse.data.image], { type: 'image/jpg' });
        console.log(blob);
        var imageUrl = URL.createObjectURL(blob);
        console.log(imageUrl);
        // Set the image source to the constructed URL
        catalogImage.src = imageUrl;
        
        
        catalogImage.onload = function() {
            // Image loaded successfully
            console.log("Image loaded successfully");
        };
        catalogImage.onerror = function() {
            // Error loading image
            console.error("Error loading image"); //ovo dobijem
        };
        mncInfoPetName.innerHTML = jsonResponse.data.pet_name;
        mncInfoPetName.style.color = 'black';
        mncInfoOwnerEmail.innerHTML = jsonResponse.data.owner_email;
        mncInfoOwnerEmail.style.color = 'black';
        mncInfoSpecies.innerHTML = jsonResponse.data.species;
        mncInfoSpecies.style.color = 'black';
        mncInfoPetAge.innerHTML = jsonResponse.data.pet_age + " years old - " + jsonResponse.age_converted + " human years";
        mncInfoPetAge.style.color = 'black';
    } else {
        console.error('No catalog data found in local storage.');
    }
});
