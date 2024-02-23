//provera da li je ulogovan kao klijent
document.addEventListener('DOMContentLoaded', function () {
    // Function to load headers
    function loadHeaders() {
        $.ajax({
            url: 'server.php', 
            method: 'GET',
            dataType: 'json',
            success: function (response) {
          
                var userData = response.data;
                console.log(userData);
  
                if (userData.loginClient) {
                    // uradi nesto ako je ulogovan kao klijent
                    console.log('Client is logged in.');
  
                    // Load client header
                    fetch("clientHeader.html")
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error("Network response was not ok");
                            }
                            return response.text();
                        })
                        .then((html) => {
                            document.getElementById("navigation").innerHTML = html;
                            addActiveClassToLink();
                        })
                        .catch((error) => console.error("Error fetching clientHeader:", error));
                        
                        var indexH1 = document.querySelector(".indexH1 h1");
                        indexH1.innerHTML = 'Wellcome to the <span style="font-family: Chicle, serif;"><span style="color: black;">Healthy</span> <span style="color: #FFD95A;">Paws</span></span>';
                        var indexH2 = document.querySelector(".indexH1 h2");
                        indexH2.innerHTML = 'Type below the <span style="color:#FFD95A; font-weight:bold">CATALOG ID</span> that you got from a veterinarian.';
                        var indexH3 = document.querySelector(".indexBtn-abs h4");
                        indexH3.innerHTML = 'Type your ID here..'; //promeniti da je input i da uzima catalog sa tim id iz baze i odvodi na catalog page koji inace nema u meniju
  
                } else if (userData.loginClinics) {
                    // uradi nesto ako je ulogovan kao klinika
                    console.log('Clinic is logged in.'); 
  
                    // Load clinics header
                    fetch("clinicsHeader.html")
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error("Network response was not ok");
                            }
                            return response.text();
                        })
                        .then((html) => {
                            document.getElementById("navigation").innerHTML = html;
                            addActiveClassToLink();
                        })
                        .catch((error) => console.error("Error fetching clinicsHeader:", error));
  
                    var mNC = document.querySelector('.mNC').style.display="flex";
                    console.log("ovo radi"); //ne radi - radi kad obrisem ovo iznad
                    var indexH1 = document.querySelector(".indexH1 h1");
                    console.log("ovo radi 2"); //prikaze se al ne radi
                    indexH2.innerHTML = 'Thank you for contributing to a better society and safety of our loved ones with <span style="font-family: Chicle, serif; color:#FFD95A; font-weight:bold">Healthy Paws</span>';
                    var indexH2 = document.querySelector(".indexH1 h2").style.display="none";
                    var indexH3 = document.querySelector(".indexBtn-abs h4");
                    indexH3.innerHTML = 'Type your ID here..'; //promeniti da je input i da uzima catalog sa tim id iz baze i odvodi na catalog page koji inace nema u meniju
  
                } else {
                    // Do something when the user is not logged in
                    console.log('User is not logged in.');
  
                    // Load default header
                    fetch("header.html")
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error("Network response was not ok");
                            }
                            return response.text();
                        })
                        .then((html) => {
                            document.getElementById("navigation").innerHTML = html;
                            addActiveClassToLink();
                        })
                        .catch((error) => console.error("Error fetching default header:", error));
                }
            }, error: function (xhr, status, error) {
              console.error("AJAX Error:", status, error);
        }});
    }
  
    // Function to add active class to navigation links
    addActiveClassToLink();
  
    // Call the loadHeaders function when the DOM is fully loaded
    loadHeaders();
});
  