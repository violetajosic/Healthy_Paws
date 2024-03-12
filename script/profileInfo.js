function setUserInfo() {
    // Use AJAX to fetch user information from the server
    $.ajax({
        url: 'getUserInfo.php',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            if (response.status === 'success') {
                var userData = response.data;

                // Populate user information in HTML
                document.getElementById("profileEmail").innerHTML += '<span>' + userData.email + '</span>';
                document.getElementById("profileSD").innerHTML += '<span>' + userData.start_date + '</span>';
                document.getElementById("profileED").innerHTML += '<span>' + userData.expiring_date + '</span>';
                document.getElementById("profileCID").innerHTML += '<span>' + userData.catalog_id + '</span>';
                document.getElementById("profileCLID").innerHTML += '<span>' + userData.clinic_id + '</span>';
            } else {
                console.error('Error fetching user information: ' + response.message);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('AJAX error: ' + textStatus + ' - ' + errorThrown);
        }
    });
}