//heading navigation to all pages
fetch("header.html")
  .then((response) => response.text())
  .then((html) => {
    // Insert the HTML content into the navigation container
    document.getElementById("navigation").innerHTML = html;

    // After the HTML is loaded, check and add the .active class
    addActiveClassToLink();
  })
  .catch((error) => console.error("Error fetching navigation:", error));
//promena iz sign u log tj iz ls html u log html
// ubacivanje logSign html u ls i log
fetch("logSign.html")
  .then((response) => response.text())
  .then((html) => {
    // Insert the HTML content into the navigation container
    document.getElementById("lswrapper").innerHTML = html;

    // Provera da li se nalazite na log.html stranici pre primene izmena
    if (window.location.href.includes("log.html")) {
      // Nakon što se HTML učita, primeniti promene na log.html
      applyChangesToLogHTML();
    }
  })
  .catch((error) => console.error("Error fetching navigation:", error));
//funkcija za promenu teksta u logSign ukoliko si na log html
function applyChangesToLogHTML() {
  //sakrivanje dugmadi
  var lsButtons = (document.querySelector(".lsButtons").style.display = "none");
  var lsAS = (document.querySelector(".lsAs").style.display = "none");
  var logInForm = (document.querySelector(".logInForm").style.display = "flex");

  // Promena teksta za lsHeading h1
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
//ukoliko na sign up klikne na client ili clinics
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
//heading ls
fetch("lsHeader.html")
  .then((response) => response.text())
  .then((html) => {
    // Insert the HTML content into the navigation container
    document.getElementById("lsNavigation").innerHTML = html;
  })
  .catch((error) => console.error("Error fetching navigation:", error));
//heading .active class
function addActiveClassToLink() {
  // Get the current page path
  var currentPagePath = window.location.pathname;

  // Select links in the navigation
  var navLinks = document.querySelectorAll(".navbar-nav a");

  // Iterate through links and check if .active class should be added
  navLinks.forEach(function (link) {
    var linkPath1 = document.querySelector(".index");
    var linkPath2 = document.querySelector(".about");
    var linkPath3 = document.querySelector(".clinics");
    var linkPath4 = document.querySelector(".diseases");
    var linkPath5 = document.querySelector(".ls");

    if (currentPagePath.includes("index.html")) {
      linkPath1.classList.add("active");
    } else if (currentPagePath.includes("about.html")) {
      linkPath2.classList.add("active");
    } else if (currentPagePath.includes("clinics.html")) {
      linkPath3.classList.add("active");
    } else if (currentPagePath.includes("diseases.html")) {
      linkPath4.classList.add("active");
    } else if (currentPagePath.includes("ls.html")) {
      linkPath5.classList.add("active");
    } else {
      console.log("Something went wrong" + error);
    }
  });
}

//INDEX HOME PAGE
//carton button hover
var indexBtn = document.querySelector(".indexBtn-abs");
var indexBtnImg = document.querySelector(".indexBtn");
var indexBtnImgHover = document.querySelector(".indexBtnHover");

// Add a click event listener
indexBtn.addEventListener("mouseover", function (event) {
  indexBtnImg.style.display = "none";
  indexBtnImgHover.style.display = "flex";
});

indexBtn.addEventListener("mouseout", function (event) {
  indexBtnImgHover.style.display = "none";
  indexBtnImg.style.display = "flex";
});

//CLINICS
//Search bar
function showDropdown() {
  // Dobavljanje referenci na HTML elemente
  var ul = document.getElementById("myUL");
  ul.style.display = "block";

  // Povezivanje funkcije za pretragu na događaj "input" input polja
  document.getElementById("myInput").addEventListener("input", searchFunction);

  // Povezivanje događaja "click" na dokumentu kako bi se sakrio dropdown
  document.addEventListener("click", function (event) {
    var input = document.getElementById("myInput");
    var ul = document.getElementById("myUL");

    // Provera da li je klik van input polja i dropdown-a
    if (event.target !== input && !ul.contains(event.target)) {
      ul.style.display = "none";
    }
  });

  // Povezivanje događaja "click" na stavke dropdown-a
  var dropdownItems = ul.getElementsByTagName("a");
  for (var i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener("click", function (event) {
      // Ažuriranje teksta input polja sa tekstom kliknutog elementa
      document.getElementById("myInput").value = event.target.textContent;

      // Sakrivanje dropdown-a
      ul.style.display = "none";

      // Prikazivanje klinika za izabrani grad
      showClinicsForCity(event.target.textContent);
    });
  }
}

function showClinicsForCity(city) {
  // Sakrivanje svih redova sa klinikama
  hideAllClinicRows();

  // Prikazivanje reda sa klinikama za izabrani grad
  var cityClass = getCityClass(city);
  var clinicRow = document.querySelector(".clinicsCityRow." + cityClass);
  clinicRow.style.display = "flex";
}

function hideAllClinicRows() {
  // Sakrivanje svih redova sa klinikama
  var clinicRows = document.querySelectorAll(".clinicsCityRow");
  clinicRows.forEach(function (row) {
    row.style.display = "none";
  });
}

function getCityClass(city) {
  // Mapiranje imena gradova na odgovarajuće klase
  var cityClassMap = {
    Belgrade: "BG",
    Pancevo: "PA",
    "Novi Sad": "NS",
    Subotica: "SU",
  };

  // Vraćanje odgovarajuće klase za izabrani grad
  return cityClassMap[city];
}

function searchFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  if (filter === "") {
    // Ako je input prazan, prikaži sve redove sa gradovima
    var cityRows = document.querySelectorAll(".clinicsCityRow");
    cityRows.forEach(function (row) {
      row.style.display = "";
    });
  } else {
    // Ako input nije prazan, filtriraj gradove na osnovu unosa
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
}
//LOGIN funkcija odvodi na page
function validateAndRedirect() {
  var email = document.querySelector("#exampleInputEmail1").value;
  var password = document.querySelector("#exampleInputPassword1").value;
  // var rememberMe = document.querySelector("#exampleCheck1").checked;
  var emailErrorDiv = document.getElementById("emailError");
  var passwordErrorDiv = document.getElementById("passwordError");

  // Resetovanje prethodnih poruka o greškama i boje teksta
  emailErrorDiv.innerText = "";
  emailErrorDiv.style.color = ""; // Resetuj boju teksta
  passwordErrorDiv.innerText = "";
  passwordErrorDiv.style.color = ""; // Resetuj boju teksta

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Provera praznih polja
  if (!email.trim()) {
    emailErrorDiv.innerText = "This field is required.";
    emailErrorDiv.style.color = "red"; // Postavi boju teksta na crvenu
  } else if (!emailRegex.test(email)) {
    emailErrorDiv.innerText =
      "Ups! Email Adress is incorrect, it should contain @ and .com";
    emailErrorDiv.style.color = "red"; // Postavi boju teksta na crvenu
  }

  if (!password.trim()) {
    passwordErrorDiv.innerText = "This field is required.";
    passwordErrorDiv.style.color = "red"; // Postavi boju teksta na crvenu
  } else if (
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/\d/.test(password)
  ) {
    passwordErrorDiv.innerText = "Ups! Password is incorrect.";
    passwordErrorDiv.style.color = "red"; // Postavi boju teksta na crvenu
  }

  if (emailErrorDiv.innerText === "" && passwordErrorDiv.innerText === "") {
    // Ako nema grešaka, preusmeri na client.html
    window.location.href = "index.html";
  }

  return false; // Sprečava slanje forme
}
//SIGNUP
function validateAndRedirectSignUpCLIENT() {
  var email = document.querySelector("#exampleInputEmail2").value;
  var password = document.querySelector("#exampleInputPassword2").value;
  var repeatPassword = document.querySelector(".repeatPassword").value;
  var emailErrorDiv = document.querySelector(".emailError");
  var passwordErrorDiv = document.querySelector(".passwordError");
  var repeatPasswordErrorDiv = document.querySelector(".repeatPasswordError");

  // Resetovanje prethodnih poruka o greškama i boje teksta
  emailErrorDiv.innerText = "";
  emailErrorDiv.style.color = ""; // Resetuj boju teksta
  passwordErrorDiv.innerText = "";
  passwordErrorDiv.style.color = ""; // Resetuj boju teksta
  repeatPasswordErrorDiv.innerText = "";
  repeatPasswordErrorDiv.style.color = ""; // Resetuj boju teksta

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Provera praznih polja
  if (!email.trim()) {
    emailErrorDiv.innerText = "This field is required.";
    emailErrorDiv.style.color = "red";
  } else if (!emailRegex.test(email)) {
    emailErrorDiv.innerText =
      "Ups! Email Address is incorrect, it should contain @ and .com";
    emailErrorDiv.style.color = "red";
  }

  if (!password.trim()) {
    passwordErrorDiv.innerText = "This field is required.";
    passwordErrorDiv.style.color = "red";
  } else if (
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/\d/.test(password)
  ) {
    passwordErrorDiv.innerText =
      "Password should contain a minimum of 8 characters, one uppercase letter, and one digit.";
    passwordErrorDiv.style.color = "red";
  }

  if (!repeatPassword.trim()) {
    repeatPasswordErrorDiv.innerText = "This field is required.";
    repeatPasswordErrorDiv.style.color = "red";
  } else if (repeatPassword.trim() !== password.trim()) {
    repeatPasswordErrorDiv.innerText = "Ups! Passwords don't match.";
    repeatPasswordErrorDiv.style.color = "red";
  }

  if (
    emailErrorDiv.innerText === "" &&
    passwordErrorDiv.innerText === "" &&
    repeatPasswordErrorDiv.innerText === ""
  ) {
    // Ako nema grešaka, preusmeri na client.html
    var clientLogged = true;
    window.location.href = "index.html";
  }
  //ako se neko prijavljuje kao klijent na disease strani se pojavljuje klasa alert-heading
  //treba da se doda da je flex i ako nije uopste ulogovan niko
  if (clientLogged){
    fetch("clientHeader.html")
    .then((response) => response.text())
    .then((html) => {
    // promena navigacije ukoliko je ulogovan kao klijent
    document.getElementById("lsNavigation").innerHTML = html;
    addActiveClassToLink(); //dodavanje aktive klase za linije
  })
    .catch((error) => console.error("Error fetching navigation:", error));
    var diseaseAlertHeading = document.querySelector(".alert-heading");
    diseaseAlertHeading.style.display = "flex";
  }
}
function validateAndRedirectSignUpCLINICS() {
  var email = document.querySelector("#exampleInputEmail3").value;
  var password = document.querySelector("#exampleInputPassword4").value;
  var repeatPassword = document.querySelector("#exampleInputPassword5").value;
  var clinicsID = document.querySelector("#exampleInputPassword6").value;
  var emailErrorDiv = document.querySelector(".emailError2");
  var passwordErrorDiv = document.querySelector(".passwordError2");
  var repeatPasswordErrorDiv = document.querySelector(".repeatPasswordError2");
  var clinicsIDErrorDiv = document.querySelector(".clinicsId");

  // Resetovanje prethodnih poruka o greškama i boje teksta
  emailErrorDiv.innerText = "";
  emailErrorDiv.style.color = ""; // Resetuj boju teksta
  passwordErrorDiv.innerText = "";
  passwordErrorDiv.style.color = ""; // Resetuj boju teksta
  repeatPasswordErrorDiv.innerText = "";
  repeatPasswordErrorDiv.style.color = ""; // Resetuj boju teksta
  clinicsIDErrorDiv.innerText = "";
  clinicsIDErrorDiv.style.color = ""; // Resetuj boju teksta

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Provera praznih polja
  if (!email.trim()) {
    emailErrorDiv.innerText = "This field is required.";
    emailErrorDiv.style.color = "red";
  } else if (!emailRegex.test(email)) {
    emailErrorDiv.innerText =
      "Ups! Email Address is incorrect, it should contain @ and .com";
    emailErrorDiv.style.color = "red";
  }
  if (!password.trim()) {
    passwordErrorDiv.innerText = "This field is required.";
    passwordErrorDiv.style.color = "red";
  } else if (
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/\d/.test(password)
  ) {
    passwordErrorDiv.innerText =
      "Password should contain a minimum of 8 characters, one uppercase letter, and one digit.";
    passwordErrorDiv.style.color = "red";
  }
  if (!repeatPassword.trim()) {
    repeatPasswordErrorDiv.innerText = "This field is required.";
    repeatPasswordErrorDiv.style.color = "red";
  } else if (repeatPassword.trim() !== password.trim()) {
    repeatPasswordErrorDiv.innerText = "Ups! Passwords don't match.";
    repeatPasswordErrorDiv.style.color = "red";
  }
  if (!clinicsID.trim()) {
    clinicsIDErrorDiv.innerText = "This field is required.";
    clinicsIDErrorDiv.style.color = "red";
  } else if (!/^\d+$/.test(clinicsID)) {
    clinicsIDErrorDiv.innerText = "ID should contain digits only.";
    clinicsIDErrorDiv.style.color = "red";
  }

  if (
    emailErrorDiv.innerText === "" &&
    passwordErrorDiv.innerText === "" &&
    repeatPasswordErrorDiv.innerText === "" &&
    clinicsIDErrorDiv.innerText === ""
  ) {
    // Ako nema grešaka, preusmeri na index.html
    window.location.href = "index.html";
  }
  //ako se neko prijavljuje kao klijent na disease strani se pojavljuje klasa alert-heading
  //treba da se doda da je flex i ako nije uopste ulogovan niko
  if (clinicsLogged){
    fetch("clinicsHeader.html")
    .then((response) => response.text())
    .then((html) => {
    // promena navigacije ukoliko je ulogovan kao klinika
    document.getElementById("lsNavigation").innerHTML = html;
    addActiveClassToLink(); //dodavanje aktive klase za linije
  })
    .catch((error) => console.error("Error fetching navigation:", error));
  }
}
//provera da li je ulogovan kao klijent
document.addEventListener('DOMContentLoaded', function () {
  // Function to load headers
  function loadHeaders() {
      $.ajax({
          url: 'server.php', // Adjust the URL as needed
          method: 'GET',
          dataType: 'json',
          success: function (response) {
              var userData = JSON.parse(response);

              if (userData.clientLogged) {
                  // Do something when the user is logged in as a client
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

              } else if (userData.clinicLogged) {
                  // Do something when the user is logged in as a clinic
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

                  // Additional clinic-specific logic
                  // ...

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
          }
      });
  }

  // Function to add active class to navigation links
  addActiveClassToLink();

  // Call the loadHeaders function when the DOM is fully loaded
  loadHeaders();
});


//funkcija za diseases
function find() {
  // Hide diseases-list-wrapper
  document.querySelector(".diseases-list-wrapper").style.display = "none";
  var headingElement = document.querySelector(".diseasesHeadingChange h3");
  headingElement.innerHTML = "These are assumed diseases:";
  headingElement.style.color = "red";
  


  // Check if the checkbox with id 'vomiting' is checked
  var vomitingCheckbox = document.getElementById("vomiting");
  var diarrheaCheckbox = document.getElementById("diarrhea");
  var weightLossCheckbox = document.getElementById("weightLoss");
  var unexplainedBleedingCheckbox = document.getElementById(
    "unexplainedBleeding"
  );
  var changesInActivityCheckbox = document.getElementById("changesInActivity");
  var lethargyCheckbox = document.getElementById("lethargy");
  var fearOfTouchCheckbox = document.getElementById("fearOfTouch");
  var coughCheckbox = document.getElementById("cough");
  var difficultyBreathingCheckbox = document.getElementById(
    "difficultyBreathing"
  );
  var sneezingCheckbox = document.getElementById("sneezing");
  var nasalDischargeCheckbox = document.getElementById("nasalDischarge");
  var swellingOrLumpsCheckbox = document.getElementById("swellingOrLumps");
  var redEyesCheckbox = document.getElementById("redEyes");
  var lightSensitivityCheckbox = document.getElementById("lightSensitivity");
  var stomatchPainCheckbox = document.getElementById("stomatchPain");
  var difficultySwallowingCheckbox = document.getElementById(
    "difficultySwallowing"
  );
  var lossOfBalanceCheckbox = document.getElementById("lossOfBalance");
  var coordinationProblemsCheckbox = document.getElementById(
    "coordinationProblems"
  );
  var seizuresCheckbox = document.getElementById("seizures");
  var lossOfConsciousnessCheckbox = document.getElementById(
    "lossOfConsciousness"
  );
  var difficultyMovingCheckbox = document.getElementById("difficultyMoving");
  var weaknessInLegsCheckbox = document.getElementById("weaknessInLegs");
  var frequentInfectionsCheckbox =
    document.getElementById("frequentInfections");
  var autoimmuneReactionsCheckbox = document.getElementById(
    "autoimmuneReactions"
  );

  var canineParvovirusExample = document.querySelector(".canine-Parvovirus");
  var rhdExample = document.querySelector(".rhd");
  var feLVExample = document.querySelector(".feLV");
  var avianInfluenzaExample = document.querySelector(".avian-Influenza");
  var canineDistemperExample = document.querySelector(".canine-Distemper");
  var ehvExample = document.querySelector(".ehv");
  var equineInfluenzaExample = document.querySelector(".equine-Influenza");
  var brsvExample = document.querySelector(".brsv");
  var fivExample = document.querySelector(".fiv");
  var cwdExample = document.querySelector(".cwd");

  if (
    vomitingCheckbox.checked ||
    diarrheaCheckbox.checked ||
    weightLossCheckbox.checked ||
    fearOfTouchCheckbox.checked ||
    stomatchPainCheckbox.checked ||
    difficultySwallowingCheckbox.checked
  ) {
    canineParvovirusExample.style.display = "flex";
  }
  if (unexplainedBleedingCheckbox.checked) {
    canineParvovirusExample.style.display = "flex";
    rhdExample.style.display = "flex";
  }
  if (swellingOrLumpsCheckbox.checked) {
    rhdExample.style.display = "flex";
  }
  if (sneezingCheckbox.checked) {
    feLVExample.style.display = "flex";
    avianInfluenzaExample.style.display = "flex";
  }
  if (nasalDischargeCheckbox.checked) {
    feLVExample.style.display = "flex";
    canineDistemperExample.style.display = "flex";
    ehvExample.style.display = "flex";
  }
  if (redEyesCheckbox.checked || lightSensitivityCheckbox.checked) {
    feLVExample.style.display = "flex";
  }
  if (coughCheckbox.checked) {
    equineInfluenzaExample.style.display = "flex";
    canineDistemperExample.style.display = "flex";
    ehvExample.style.display = "flex";
    brsvExample.style.display = "flex";
  }
  if (difficultyBreathingCheckbox.checked) {
    equineInfluenzaExample.style.display = "flex";
    avianInfluenzaExample.style.display = "flex";
    brsvExample.style.display = "flex";
  }
  if (seizuresCheckbox.checked) {
    avianInfluenzaExample.style.display = "flex";
    canineDistemperExample.style.display = "flex";
  }
  if (frequentInfectionsCheckbox.checked) {
    avianInfluenzaExample.style.display = "flex";
    canineDistemperExample.style.display = "flex";
    fivExample.style.display = "flex";
  }
  if (autoimmuneReactionsCheckbox.checked) {
    fivExample.style.display = "flex";
  }
  if (lossOfBalanceCheckbox.checked) {
    canineDistemperExample.style.display = "flex";
  }
  if (
    coordinationProblemsCheckbox.checked ||
    lossOfConsciousnessCheckbox.checked
  ) {
    ehvExample.style.display = "flex";
  }
  if (
    //ovaj ne radi
    changesInActivityCheckbox.checked ||
    difficultyMovingCheckbox.checked ||
    weaknessInLegsCheckbox.checked
  ) {
    cwdExample.style.display = "flex";
  }
  if (lethargyCheckbox.checked) {
    canineParvovirusExample.style.display = "flex";
    cwdExample.style.display = "flex";
  }
}
//disease naslov crveni
var diseaseAlertHeading = document.querySelector(".alert-heading");
