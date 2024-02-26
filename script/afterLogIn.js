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
                    
                    if (window.location.pathname.includes('index.html')) { //samo na home page index.html
                        var indexH1 = document.querySelector(".indexH1 h1");
                        indexH1.innerHTML = 'Wellcome to the <span style="font-family: Chicle, serif;"><span style="color: black; letter-spacing: 1px;">Healthy</span> <span style="color: #FFD95A; letter-spacing: 1px;">Paws</span></span>';
                        var indexH2 = document.querySelector(".indexH1 h2");
                        indexH2.innerHTML = 'Type below the <span style="color:#FFD95A; font-weight:bold">CATALOG ID</span> that you got from a veterinarian.';
                        var indexH3 = document.querySelector(".indexBtn-abs h4");
                        indexH3.innerHTML = 'Type your ID here..'; //ovo mora da je input za catalog
                        var buttonText = document.querySelector(".indexBtn-abs");
                        buttonText.style.display="none";

                        var newSearch = document.querySelector(".IDSearchClinic"); //klikom na ovo salje na catalog.html sa odredjenim podacima iz baze UKOLIKO JE MEMBERSHIP PLACEN, UKOLIKO NIJE IZLAZI ALERT ILI NEKI NASLOV DA MORAJU DA PLATE
                        newSearch.style.display="flex";
                    }
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
                    
                    if (window.location.pathname.includes('index.html')) {
                        // kod samo za index stranu
                        var indexH1 = document.querySelector(".indexH1 h1"); //radi
                        indexH1.innerHTML = 'Thank you for contributing to a better society <br> and safety of our loved ones <br> with <span style="font-family: Chicle, serif; color:black; font-weight:bold; letter-spacing: 1px;">Healthy <span style="color:#FFD95A; letter-spacing: 1px;">Paws</span></span>';
                        
                        function adjustFontSize() { //promena velicine h1 naslova
                            // uzimanje velicine ekrana za responsive
                            var windowWidth = window.innerWidth;
                        
                            // breakpoints za responsive
                            var breakpoints = {
                                small: 600,
                                medium: 1000,
                                xl: 1200,
                                xxl: 1300
                            };
                            // font size za responsive
                            var fontSizes = {
                                small: "20px",
                                medium: "35px",
                                xl: "40px"
                            };
                        
                            //izvrsavanje izmene
                            var fontSize;
                            if (windowWidth < breakpoints.small) {
                                fontSize = fontSizes.small;
                            } else if (windowWidth < breakpoints.medium) {
                                fontSize = fontSizes.medium;
                            } else {
                                fontSize = fontSizes.xl;
                            }
                        
                            //izvrsavanje izmene
                            indexH1.style.fontSize = fontSize;
                        }
                        
                        // izvrsavanje funkcije
                        adjustFontSize();
                        
                        // dodavanje eventlistenera da bi se funkcija izvrsila
                        window.addEventListener('resize', adjustFontSize);

                        var indexH2 = document.querySelector(".indexH1 h2"); //radi
                        indexH2.style.display = "none";
                        var indexH3 = document.querySelector(".indexBtn-abs h4"); //radi
                        indexH3.innerHTML = 'Type catalog ID..'; 
                        
                        var buttonText = document.querySelector(".indexBtn-abs");
                        buttonText.style.display="none";

                        var newSearch = document.querySelector(".IDSearchClinic");
                        newSearch.style.display="flex";
                    }
                        
                    if (window.location.pathname.includes('help.html')) { //radi
                        // kod samo za help stranu
                        var mNC = document.querySelector('.mNC'); //dodavanje row make new catalog
                        mNC.style.display = "flex";
                    }
                    
                    if (window.location.pathname.includes('diseases.html')) { //radi
                        // kod samo za diseases stranu
                        var diseaseAlert = document.querySelector(".alert-heading");
                        diseaseAlert.style.display = "none"; //sakriva alert crveni ako je klinika usla
                    }
                    if (window.location.pathname.includes('profile.html')) {
                        var profileClientBtn = document.querySelector(".profileButton").style.display="none";
                        var profileClientBtn = document.querySelector("#profileED").style.display="none";
                        var profileClientBtn = document.querySelector("#profileCID").style.display="none";
                        var profileClientBtn = document.querySelector("#profileCLID").style.display="flex";
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
  
    // Function to add active class to navigation links
    addActiveClassToLink();
  
    // Call the loadHeaders function when the DOM is fully loaded
    loadHeaders();
});
  