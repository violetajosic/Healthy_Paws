 //promena iz sign u log tj iz ls html u log html
fetch("logSign.html")
  .then((response) => response.text())
  .then((html) => {
    // ubacivanje logSing.html u id lswrapper
    document.getElementById("lswrapper").innerHTML = html;

    // Provera da li se nalazite na log.html stranici pre primene izmena
    if (window.location.href.includes("log.html")) {
      // Nakon što se HTML učita, primeniti promene na log.html
      applyChangesToLogHTML();
    }
  })
  .catch((error) => console.error("Error fetching navigation:", error));

//funkcija za promenu teksta ukoliko si na log html
function applyChangesToLogHTML() {
    //sakrivanje dugmadi
    var lsButtons = (document.querySelector(".lsButtons").style.display = "none");
    var lsAS = (document.querySelector(".lsAs").style.display = "none");
    var logInForm = (document.querySelector(".logInForm").style.display = "flex");
  
    // Promena teksta za lsHeading h1 u log in
    var lsHeading = document.querySelector(".lsHeading h1");
    if (lsHeading) {
      lsHeading.innerHTML =
        '<span style="font-family:\'Chicle\', serif;">Log <span style="color: #FFD95A; letter-spacing: 2px;">In</span></span>';
    }
  
    // Promena teksta za lsSwitch h6
    var lsSwitch = document.querySelector(".lsSwitch h6");
    if (lsSwitch) {
      lsSwitch.innerHTML =
        'Don\'t have an account? <a href="ls.html"><span class="lsLogInBtn" style="color: #FFD95A;">Sign up</span></a>';
    }
  }

//ukoliko na sign up klikne na client ili clinics salje na odredjeni sign up
function signUpChoose() {
    var clientLSBtn = document.querySelector(".clientLSBtn");
    var clinicsLSBtn = document.querySelector(".clinicsLSBtn");
  
    if (clientLSBtn || clinicsLSBtn) {
      var lsHeading = document.querySelector(".lsHeading");
      var lsButtons = (document.querySelector(".lsButtons").style.display =
        "none");
      var logInForm = (document.querySelector(".logInForm").style.display =
        "none");
      lsHeading.classList.remove("mb-5"); // Remove existing margin
      lsHeading.classList.add("mb-4"); // Add new margin
    }
  
    if (clientLSBtn && clinicsLSBtn) {
      var signUpFormClient = document.querySelector(".signUpFormClient");
      var signUpFormClinics = document.querySelector(".signUpFormClinics");
      var bodyLs = document.querySelector(".bodyLS").style.height="auto";
  
      // Prikazi signUpFormClient ili signUpFormClinics, zavisno od dugmeta koje je kliknuto
      if (clientLSBtn.contains(event.target)) {
        var signUpHeading = (document.querySelector(
          ".signUpHeading1"
        ).style.display = "flex");
        signUpFormClient.style.display = "flex";
      } else if (clinicsLSBtn.contains(event.target)) {
        var signUpHeading = (document.querySelector(
          ".signUpHeading2"
        ).style.display = "flex");
        signUpFormClinics.style.display = "flex";
      }
    }
  }

//ubacivanje ls headera za ove strane (samo logo)
fetch("lsHeader.html")
.then((response) => response.text())
.then((html) => {
  // Insert the HTML content into the navigation container
  document.getElementById("lsNavigation").innerHTML = html;
})
.catch((error) => console.error("Error fetching navigation:", error));