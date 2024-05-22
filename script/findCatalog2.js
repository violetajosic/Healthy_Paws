$(document).ready(function() {
    // Check if data exists in local storage
    var catalogData = localStorage.getItem('catalogData');
    var catalogID = localStorage.getItem('catalogID');

    if (catalogData && catalogID) {
        var jsonResponse = JSON.parse(catalogData);

        var catalogNumber = document.querySelector("#catalogNumber");
        var catalogImage = document.querySelector("#catalogImage img");
        var mncInfoPetName = document.querySelector("#mncInfoPetName");
        var mncInfoOwnerEmail = document.querySelector("#mncInfoOwnerEmail");
        var mncInfoSpecies = document.querySelector("#mncInfoSpecies");
        var mncInfoPetAge = document.querySelector("#mncInfoPetAge");

        catalogNumber.innerHTML = catalogID;
        catalogImage.src = 'data:image/jpeg;base64,' + jsonResponse.image; //treba da se izmeni
        mncInfoPetName.innerHTML = jsonResponse.pet_name;
        mncInfoOwnerEmail.innerHTML = jsonResponse.owner_email;
        mncInfoSpecies.innerHTML = jsonResponse.species;
        mncInfoPetAge.innerHTML = jsonResponse.pet_age + " years old - " + jsonResponse.age_converted + " human years";

    } else {
        console.error('No catalog data found in local storage.');
    }
});
