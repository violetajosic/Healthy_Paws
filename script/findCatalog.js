function findID() {
    var input = document.querySelector('.IDSearchClinicInput').value;
    if (input.trim() !== '') {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var response = xhr.responseText;
                    // Do something with the response (e.g., display it)
                    console.log(response);
                } else {
                    console.error('Request failed with status:', xhr.status);
                }
            }
        };
        xhr.open('POST', 'findCatalog.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('id=' + input);
    } else {
        console.error('Input cannot be empty.');
    }
}
