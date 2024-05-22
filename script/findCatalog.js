function findID() {
    var findIDInput = document.querySelector('.IDSearchClinicInput').value;
    if (findIDInput.trim() !== '') {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var response = xhr.responseText;
                    // Check if ID was found
                    if (response.trim() === 'ID not found.') {
                        console.error('ID not found.');
                    }
                } else {
                    console.error('Request failed with status:', xhr.status);
                }
            }
        };
        xhr.open('POST', 'findCatalog.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('findID=' + findIDInput);
    } else {
        console.error('Input cannot be empty.');
    }
    return false; // Prevent default form submission
}
