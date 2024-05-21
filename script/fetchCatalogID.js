document.addEventListener("DOMContentLoaded", function() {
    // Fetch catalog ID via AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "fetchCatalogID.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('currentCatalogID').innerText = xhr.responseText; //prikazivanje na profile strani
        }
    };
    xhr.send();
});