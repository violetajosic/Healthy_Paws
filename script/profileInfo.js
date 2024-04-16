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
                var startDate = new Date(userData.created_at); // pocetni datum - kad je napravljen profil

                // dodaje 1 mesec
                startDate.setMonth(startDate.getMonth() + 1);


                // Populate user information in HTML
                $('#currentUserEmail').text(userData.email);
                $('#currentUserPassword').text(userData.password);
                $('#currentUserStartDate').text(userData.created_at);
                $('#currentUserExpiringDate').text(startDate.toISOString().slice(0, 10)); // istice mesec nakon dana
                $('#currenClinicStartDate').text(userData.created_at);
                $('#currentClinicID').text(userData.clinics_id);
                $('#currentCatalogID').text(userData.catalog_id);
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
//pocetni datum treba da se menja, svaki put kad istekne, pocetni datum postaje dan uplate