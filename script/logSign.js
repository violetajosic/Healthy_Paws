 //switch between sign up and log in
fetch("logSign.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("lswrapper").innerHTML = html;

    if (window.location.href.includes("log.html")) {
      applyChangesToLogHTML();
    }
  })
  .catch((error) => console.error("Error fetching navigation:", error));

//change text on log.html
function applyChangesToLogHTML() {
    var lsButtons = (document.querySelector(".lsButtons").style.display = "none");
    var lsAS = (document.querySelector(".lsAs").style.display = "none");
    var logInForm = (document.querySelector(".logInForm").style.display = "flex");
  
    var lsHeading = document.querySelector(".lsHeading h1");
    if (lsHeading) {
      lsHeading.innerHTML =
        '<span style="font-family:\'Chicle\', serif;">Log <span style="color: #FFD95A; letter-spacing: 2px; filter: drop-shadow(1px 1px 1px black);">In</span></span>';
    }
  
    var lsSwitch = document.querySelector(".lsSwitch h6");
    if (lsSwitch) {
      lsSwitch.innerHTML =
        'Don\'t have an account? <a href="ls.html"><span class="lsLogInBtn" style="color: #FFD95A; filter: drop-shadow(1px 1px 1px black);">Sign up</span></a>';
    }
  }

//choose client / clinic sign up
function signUpChoose(event) {
    var clientLSBtn = document.querySelector(".clientLSBtn");
    var clinicsLSBtn = document.querySelector(".clinicsLSBtn");
  
    if (clientLSBtn || clinicsLSBtn) {
      var lsHeading = document.querySelector(".lsHeading");
      var lsButtons = (document.querySelector(".lsButtons").style.display =
        "none");
      var logInForm = (document.querySelector(".logInForm").style.display =
        "none");
      lsHeading.classList.remove("mb-5");
      lsHeading.classList.add("mb-4");
    }

    if (clientLSBtn && clinicsLSBtn) {
      var signUpFormClient = document.querySelector(".signUpFormClient");
      var signUpFormClinics = document.querySelector(".signUpFormClinics");
      var bodyLs = document.querySelector(".bodyLS").style.height="auto";
  
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

    if (event.currentTarget.classList.contains('clientLSBtn')){
      var clientMembershipPay = document.querySelector(".clientMembershipPay").style.setProperty("display", "flex", "important");
      var signUpFormClient = document.querySelector(".signUpFormClient");
      if (signUpFormClient) {
          signUpFormClient.style.setProperty("margin-bottom", "20px", "important");
      }
    }

    if (event.currentTarget.classList.contains('clinicsLSBtn')) {
      var clientMembershipPay = document.querySelector(".clientMembershipPay").style.setProperty("display", "none", "important");
    }
  }

//changin navigation menu just to have logo
fetch("lsHeader.html")
.then((response) => response.text())
.then((html) => {
  document.getElementById("lsNavigation").innerHTML = html;
})
.catch((error) => console.error("Error fetching navigation:", error));

//enter 
var enterBtn = document.querySelector(".enterBtn");
enterBtn.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("enterBtn").click();
  }
});