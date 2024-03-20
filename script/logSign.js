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

//membership
function clientSignUpMembership() {
    var clientSignUpMembership = document.querySelector(".clientSignUpMembership");

    if (clientSignUpMembership) {
        var clientMembershipPages = document.querySelectorAll(".clientMembershipPage");
      
        clientMembershipPages.forEach(function(element) {
            element.style.display = "flex";
        });

        var lsHeading = document.querySelector(".lsHeading");
        lsHeading.style.marginBottom = "0";
        lsHeading.style.setProperty("margin-bottom", "0", "important");

        var lsHeadingh1 = document.querySelector(".lsHeading h1");
        lsHeadingh1.innerHTML = "PAY MEMBERSHIP FEE";

        function fontSizes() { //promena velicine h1 naslova
          // uzimanje velicine ekrana za responsive
          var windowWidth = window.innerWidth;
      
          // breakpoints za responsive
          var breakpoints = {
              xsmall : 576,
              small: 600,
              medium: 1000,
              xl: 1200,
          };
          // font size za responsive
          var fontSizes = {
              xsmall : "25px",
              small: "30px",
              medium: "35px",
              xl: "40px"
          };
      
          //izvrsavanje izmene
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
      
          //izvrsavanje izmene
          var lsHeadingh1 = document.querySelector(".lsHeading h1");
          lsHeadingh1.style.setProperty("font-size", fontSize, "important");
          var clientMembershipPay = document.querySelector(".clientMembershipPay").style.display="none";
          var payClientMembership = document.querySelector(".payClientMembership").style.display="flex";
      }
      
      // izvrsavanje funkcije
      fontSizes();
      window.addEventListener('resize', fontSizes);

        var lsAs = document.querySelector(".lsAs h5").style.display = "none";
        var signUpHeading1 = document.querySelector(".signUpHeading1 h3").style.display = "none";

        // Iterate over each element in the NodeList and set the style individually
        var signUpFormGroup = document.querySelectorAll(".signUpFormGroup");
        signUpFormGroup.forEach(function (element) {
            element.style.display = "none";
        });

        var clientMembershipPay = document.querySelectorAll(".clientMembershipPay").style.display = "none";

        var signUpButtonPay = document.querySelectorAll(".btn.btn-primary.clinicsLSBtn.loginBtn.mt-4 button").style.display = "none"; //ne radi

        var lsSwitchElements = document.querySelectorAll(".lsSwitch"); //ne radi
        lsSwitchElements.forEach(function(element) {
            element.style.display = "none";
        });    
      }
}
//enter key
var enterBtn = document.querySelector(".enterBtn");
enterBtn.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("enterBtn").click();
  }
});