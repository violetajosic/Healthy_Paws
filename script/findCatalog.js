//glavna pretraga
$(document).ready(function() {
    function findCatalogID(event) {
        event.preventDefault();

        var findIDInput = $('.IDSearchClinicInput').val().trim(); // Upisan ID u pretragu

        if (findIDInput !== '') {
            $.ajax({
                type: 'POST',
                url: 'findCatalog.php', 
                data: { findID: findIDInput },
                success: function(response) {
                    console.log(response);

                    try {
                        var jsonResponse = JSON.parse(response);

                        if (jsonResponse.success) {
                            
                            if (jsonResponse.logged.loginClient === 1) {
                                var userPets = jsonResponse.data.userPets;
                                if (userPets.includes(parseInt(findIDInput))) {
                                    localStorage.setItem('catalogData', JSON.stringify(jsonResponse));
                                    localStorage.setItem('catalogID', findIDInput);
                                    window.location.href = 'catalog.html';
                                } else {
                                    console.log("ID mismatch.");
                                }
                            } else if (jsonResponse.logged.loginClinics === 1) {
                                localStorage.setItem('catalogData', JSON.stringify(jsonResponse));
                                localStorage.setItem('catalogID', findIDInput);
                                window.location.href = 'catalog.html';
                            } else {
                                console.log("Ne prepoznaje ko je ulogovan.");
                            }
                        } else if (jsonResponse.error) {
                            var findIDError = $('#findIDError');
                            findIDError.html("Catalog with " + findIDInput + " ID number does not exist.");
                            findIDError.css('color', 'red');
                        } 
                    } catch (e) {
                        console.error("Error parsing JSON response:", e);
                        console.log("Response that caused the error:", response);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error('Request failed with status:', textStatus, 'Error:', errorThrown);
                }
            });
        } else {
            console.error('Input cannot be empty.');
        }
    }

    $('.IDSearchClinic').on('submit', findCatalogID);
});
