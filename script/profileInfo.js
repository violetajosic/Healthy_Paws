$(document).ready(function() {
    $.ajax({
        url: 'getUserInfo.php',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            if (response.status === 'success') {
                var userData = response.data;
                var startDate = new Date(userData.created_at);

                startDate.setFullYear(startDate.getFullYear() + 1);

                // current logged user
                $('#currentUserEmail').text(userData.email);
                $('#currentUserPassword').text(userData.password);
                $('#currentUserStartDate').text(userData.created_at);
                $('#currentUserExpiringDate').text(startDate.toISOString().slice(0, 10));
                $('#currenClinicStartDate').text(userData.created_at);
                $('#currentClinicID').text(userData.clinic_id);
                $('#currentCatalogID').text(userData.catalog_id);
            } else {
                console.error('Error fetching user information: ' + response.message);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('AJAX error: ' + textStatus, errorThrown);
        }
    });
});