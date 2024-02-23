//LOGIN validacija
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

//SIGNUP validacija CLIENT
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

// validacija CLINICS
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