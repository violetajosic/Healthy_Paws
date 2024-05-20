function findID() {
    const catalogId = document.getElementById("catalogSearchId").value;

    fetch(`findCatalog.php?id=${catalogId}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
                return;
            }

            document.getElementById("catalogNumber").textContent = catalogId;
            document.getElementById("catalogImage").innerHTML = `<img src="${data.image}" alt="Catalog image">`;
            document.getElementById("mncInfoPetName").textContent = data.pet_name;
            document.getElementById("mncInfoOwnerEmail").textContent = data.owner_email;
            document.getElementById("mncInfoSpecies").textContent = data.species;
            document.getElementById("mncInfoPetAge").textContent = `${data.pet_age} years old - ${data.age_converted} human years`;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("An error occurred while fetching the catalog data.");
        });
}
