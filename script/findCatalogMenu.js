
//pretraga u meniju kod klinike
console.log("findCatalogMenu.js radi"); //radi
$(document).ready(function() {
    function findCatalogIDMenu(event) {
        event.preventDefault();
       // console.log("2 radi"); //ovo se ne prikazuje
        var findIDMenuInput = $('.IDSearchClinicInputMenu').val().trim(); // Upisan ID u pretragu

        if (findIDMenuInput !== '') {
            $.ajax({
                type: 'POST',
                url: 'findCatalogMenu.php', 
                data: { findIDMenu: findIDMenuInput },
                success: function(response) {
                    console.log(response);

                    try {
                        var jsonResponse = JSON.parse(response);

                        if (jsonResponse.success) {
                            if (jsonResponse.logged.loginClient === 1) {
                                var userPets = jsonResponse.data.userPets;
                                if (userPets.includes(parseInt(findIDMenuInput))) {
                                    localStorage.setItem('catalogData', JSON.stringify(jsonResponse));
                                    localStorage.setItem('catalogID', findIDMenuInput);
                                    window.location.href = 'catalog.html';
                                } else {
                                    console.log("ID mismatch.");
                                }
                            } else if (jsonResponse.logged.loginClinics === 1) {
                                localStorage.setItem('catalogData', JSON.stringify(jsonResponse));
                                localStorage.setItem('catalogID', findIDMenuInput);
                                window.location.href = 'catalog.html';
                            } else {
                                console.log("Ne prepoznaje ko je ulogovan.");
                            }
                        } else if (jsonResponse.error) {
                            var findIDMenuError = $('#findIDMenuError');
                            findIDMenuError.html("Catalog with " + findIDMenuInput + " ID number does not exist.");
                            findIDMenuError.css('color', 'red');
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

    $('.IDSearchClinicMenu').on('submit', findCatalogIDMenu);
});
