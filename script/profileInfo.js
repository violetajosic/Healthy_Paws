$(document).ready(function() {
    console.log("pokrenuto");
    // Fetch user information when the document is ready
    $.ajax({
        url: 'getUserInfo.php',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            if (response.status === 'success') {
                var userData = response.data;

                // Populate user information in HTML
                $('#currentUserEmail').text(userData.email);
                $('#currentUserPassword').text(userData.password);
                $('#currentUserStartDate').text(userData.start_date);
                $('#currentUserExpiringDate').text(userData.expiring_date);
                $('#currentCatalogID').text(userData.catalog_id);
                $('#currentClinicID').text(userData.clinics_id);
            } else {
                console.error('Error fetching user information: ' + response.message);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('AJAX error: ' + textStatus, errorThrown);
        }
    });
    console.log("zavrseno");
});
