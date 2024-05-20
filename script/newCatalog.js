document.addEventListener("DOMContentLoaded", function() {
    console.log("Document loaded");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "getLastId.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var lastId = xhr.responseText.trim();
            console.log("Catalog ID:", lastId);

            if (lastId !== "") {
                var secondXhr = new XMLHttpRequest();
                secondXhr.open("GET", "newCatalog.php?catalog_id=" + lastId, true);
                secondXhr.onreadystatechange = function() {
                    if (secondXhr.readyState === 4 && secondXhr.status === 200) {
                        try {
                            var response = JSON.parse(secondXhr.responseText);
                            if (response.status === 'success') {
                                var catalogData = response.data;
                                document.getElementById('newCatalogID').innerText = catalogData.id;
                                document.getElementById('newCatalogImage').innerText = catalogData.image;
                                document.getElementById('newCatalogPetName').innerText = catalogData.pet_name;
                                document.getElementById('newCatalogOwnerEmail').innerText = catalogData.owner_email;
                                document.getElementById('newCatalogSpecies').innerText = catalogData.species;
                                document.getElementById('newCatalogPetAge').innerText = catalogData.pet_age + ' years old - ' + catalogData.age_converted + ' human years';
                            } else {
                                console.error('Error fetching catalog information:', response.message);
                            }
                        } catch (e) {
                            console.error('Error parsing JSON response:', e);
                        }
                    }
                };
                secondXhr.send();
            } else {
                console.error('Last ID is empty.');
            }
        }
    };
    xhr.send();
});
