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
        catalogNumber.style.setProperty('color', 'black', 'important');
        catalogImage.src = 'data:image/jpeg;base64,' + jsonResponse.image; //treba da se izmeni
        mncInfoPetName.innerHTML = jsonResponse.pet_name;
        mncInfoPetName.style.setProperty('color', 'black', 'important');
        mncInfoOwnerEmail.innerHTML = jsonResponse.owner_email;
        mncInfoOwnerEmail.style.setProperty('color', 'black', 'important');
        mncInfoSpecies.innerHTML = jsonResponse.species;
        mncInfoSpecies.style.setProperty('color', 'black', 'important');
        mncInfoPetAge.innerHTML = jsonResponse.pet_age + " years old - " + jsonResponse.age_converted + " human years";
        mncInfoPetAge.style.setProperty('color', 'black', 'important');
    } else {
        console.error('No catalog data found in local storage.');
    }
});