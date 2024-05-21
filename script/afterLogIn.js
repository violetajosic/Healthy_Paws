//provera da li je ulogovan kao klijent
document.addEventListener('DOMContentLoaded', function () {
    // Function to load headers
    function loadHeaders() {
        $.ajax({
            url: 'server.php', //ako ovde stavim logIn ili SignUp ne radi tj te razdvojene php fajlove
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
                    
                    if (window.location.pathname.includes('index.html')) {
                        var indexH1 = document.querySelector(".indexH1 h1");
                        indexH1.innerHTML = 'Wellcome to the <span style="font-family: Chicle, serif;"><span style="color: black; letter-spacing: 1px;">Healthy</span> <span style="color: #FFD95A; letter-spacing: 1px;">Paws</span></span>';
                        var indexH2 = document.querySelector(".indexH1 h2");
                        indexH2.innerHTML = 'Type below the <span style="color:#FFD95A; font-weight:bold">CATALOG ID</span> that you got from a veterinarian.';
                        var indexH3 = document.querySelector(".indexBtn-abs h4");
                        indexH3.innerHTML = 'Type your ID here..';
                        var buttonText = document.querySelector(".indexBtn-abs");
                        buttonText.style.display="none";

                        var newSearch = document.querySelector(".IDSearchClinic");
                        newSearch.style.display="flex";
                        function findID() { //pretraga catalog ID-ja ALI SAMO ZA ONE KOJI IMAJU TAJ EMAIL
                            var catalogID = document.getElementById('searchInput').value;
                        
                            // Use jQuery to send an AJAX request to catalog.html
                            $.ajax({
                                type: 'POST',
                                url: 'catalog.html',
                                data: { catalogID: catalogID },
                                success: function(response) {
                                    // Update the content in catalogIDCol with the response from catalog.html
                                    $('.catalogIDCol h4').html(response);
                                },
                                error: function() {
                                    alert('Error fetching data.');
                                }
                            });
                        }
                        findID();
                    }
                    if (window.location.pathname.includes('profile.html')) {
                        var profileSD = document.querySelector("#profileSD").style.display="flex";
                        var profileSDClinic = document.querySelector("#profileSDClinic").style.display="none";
                    }
                }
                //ako je klinika
                else if (userData.loginClinics) {
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
                    
                    if (window.location.pathname.includes('index.html')) {
                        var indexH1 = document.querySelector(".indexH1 h1");
                        indexH1.innerHTML = 'Thank you for contributing to a better society <br> and safety of our loved ones <br> with <span style="font-family: Chicle, serif; color:black; font-weight:bold; letter-spacing: 1px;">Healthy <span style="color:#FFD95A; letter-spacing: 1px;">Paws</span></span>';
                        
                        function adjustFontSize() {
                            var windowWidth = window.innerWidth;
                        
                            var breakpoints = {
                                xsmall : 570,
                                small: 600,
                                medium: 1000,
                                xl: 1200,
                            };

                            var fontSizes = {
                                xsmall : "25px",
                                small: "30px",
                                medium: "35px",
                                xl: "40px"
                            };
                        
                            var fontSize;
                            if (windowWidth < breakpoints.xsmall) {
                                fontSize = fontSizes.xsmall;
                            } else if (windowWidth < breakpoints.small) {
                                fontSize = fontSizes.small;
                            } else if (windowWidth < breakpoints.medium) {
                                fontSize = fontSizes.medium;
                            } else {
                                fontSize = fontSizes.xl;
                            }
                        
                            indexH1.style.fontSize = fontSize;
                        }
                        
                        adjustFontSize();
                        
                        window.addEventListener('resize', adjustFontSize);

                        var indexH2 = document.querySelector(".indexH1 h2");
                        indexH2.style.display = "none";
                        var indexH3 = document.querySelector(".indexBtn-abs h4");
                        indexH3.innerHTML = 'Type catalog ID..'; 
                        
                        var buttonText = document.querySelector(".indexBtn-abs");
                        buttonText.style.display="none";

                        var newSearch = document.querySelector(".IDSearchClinic");
                        newSearch.style.display="flex";

                        function findID() { //pretraga catalog ID-ja
                            var catalogID = document.getElementById('searchInput').value;
                        
                            // Use jQuery to send an AJAX request to catalog.html
                            $.ajax({
                                type: 'POST',
                                url: 'catalog.html',
                                data: { catalogID: catalogID },
                                success: function(response) {
                                    // Update the content in catalogIDCol with the response from catalog.html
                                    $('.catalogIDCol h4').html(response);
                                },
                                error: function() {
                                    alert('Error fetching data.');
                                }
                            });
                        }
                        findID();
                    }
                        
                    if (window.location.pathname.includes('help.html')) {
                        var mNC = document.querySelector('.mNC');
                        mNC.style.display = "flex";
                    }
                    
                    if (window.location.pathname.includes('diseases.html')) {
                        var diseaseAlert = document.querySelector(".alert-heading");
                        diseaseAlert.style.display = "none";
                    }
                    if (window.location.pathname.includes('profile.html')) {
                        var profileClientBtn = document.querySelector(".profileButton").style.display="none";
                        var profileClientBtn = document.querySelector("#profileED").style.display="none";
                        var profileClientBtn = document.querySelector("#profileCID").style.display="none";
                        var profileSD = document.querySelector("#profileSD").style.display="none";
                        var profileSDClinic = document.querySelector("#profileSDClinic").style.display="flex";
                        var profileClientBtn = document.querySelector("#profileCLID").style.display="flex";
                    }   
                    if (window.location.pathname.includes('catalog.html')) {
                        var vetInputTable = document.querySelector(".vetInputTable").style.display = "flex";
                        document.querySelector(".vetInputTable").style.display = "flex";
                    }
                }else {
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
  
    addActiveClassToLink();
  
    // Call the loadHeaders function when the DOM is fully loaded
    loadHeaders();
});
  