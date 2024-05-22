$(document).ready(function() {
    function findCatalogID(event) {
        event.preventDefault();

        var findIDInput = $('.IDSearchClinicInput').val();

        if (findIDInput.trim() !== '') {
            $.ajax({
                type: 'POST',
                url: 'findCatalog.php',
                data: { findID: findIDInput },
                success: function(response) {
                    var jsonResponse = JSON.parse(response);

                    if (jsonResponse.error) {
                        var findIDError = $('#findIDError');
                        findIDError.html("Catalog with " + findIDInput + " ID number does not exist.");
                        findIDError.css('color', 'red');
                    } else if (jsonResponse.success) {
                        // Save data to local storage
                        localStorage.setItem('catalogData', JSON.stringify(jsonResponse));
                        localStorage.setItem('catalogID', findIDInput);

                        // Redirect to catalog.html
                        window.location.href = 'catalog.html';
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error('Request failed with status:', textStatus);
                }
            });
        } else {
            console.error('Input cannot be empty.');
        }
    }

    // Attach the findCatalogID function to the form submission event
    $('.IDSearchClinic').on('submit', findCatalogID);
});