function logOut() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 && xhr.responseText.trim() === "Logout successful") {
                window.location.href = "log.html";
            } else if (xhr.status === 302) {
                window.location.href = "log.html";
            } else {
                console.log("Logout failed");
            }
        }
    };

    xhr.open("POST", "logOut.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("logOut=true");
}
