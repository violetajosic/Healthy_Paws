$(document).ready(function() {
    // Check if data exists in local storage
    // Show required catalog
    var catalogData = localStorage.getItem('catalogData');
    var catalogID = localStorage.getItem('catalogID');

    if (catalogData && catalogID) {
        var jsonResponse = JSON.parse(catalogData);
        console.log('Image Data:', jsonResponse.data.image); // should be defined now

        var catalogNumber = document.querySelector("#catalogNumber");
        var catalogImage = document.querySelector("#catalogImage img");
        var mncInfoPetName = document.querySelector("#mncInfoPetName");
        var mncInfoOwnerEmail = document.querySelector("#mncInfoOwnerEmail");
        var mncInfoSpecies = document.querySelector("#mncInfoSpecies");
        var mncInfoPetAge = document.querySelector("#mncInfoPetAge");

        var blob = new Blob([jsonResponse.data.image], { type: 'image/jpeg' });
        var imageUrl = URL.createObjectURL(blob);
        catalogImage.src = imageUrl;

        catalogNumber.innerHTML = catalogID;
        catalogNumber.style.color = 'black';

        catalogImage.onload = function() {
            // Image loaded successfully
            console.log("Image loaded successfully");
        };
        catalogImage.onerror = function() {
            // Error loading image
            console.error("Error loading image");
        };

        mncInfoPetName.innerHTML = jsonResponse.data.pet_name;
        mncInfoPetName.style.color = 'black';
        mncInfoOwnerEmail.innerHTML = jsonResponse.data.owner_email;
        mncInfoOwnerEmail.style.color = 'black';
        mncInfoSpecies.innerHTML = jsonResponse.data.species;
        mncInfoSpecies.style.color = 'black';
        mncInfoPetAge.innerHTML = jsonResponse.data.pet_age + " years old - " + jsonResponse.data.age_converted + " human years";
        mncInfoPetAge.style.color = 'black';
    } else {
        console.error('No catalog data found in local storage.');
    }
});