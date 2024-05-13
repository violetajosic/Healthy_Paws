/* Remember me checkbox NE RADI
function handleRememberMe() {
  var rememberCheckbox = document.querySelector("#exampleCheck1");
  var emailInput = document.querySelector("#exampleInputEmail1");
  var passwordInput = document.querySelector("#exampleInputPassword1");

  rememberCheckbox.addEventListener("change", function() {
      if (rememberCheckbox.checked) {
          localStorage.setItem("remember_me", "true");
          localStorage.setItem("email", emailInput.value);
          localStorage.setItem("password", passwordInput.value);
      } else {
          localStorage.removeItem("remember_me");
          localStorage.removeItem("email");
          localStorage.removeItem("password");
      }
  });

  // Check if "Remember me" was previously checked
  var rememberMe = localStorage.getItem("remember_me");
  if (rememberMe === "true") {
      rememberCheckbox.checked = true;
      emailInput.value = localStorage.getItem("email");
      passwordInput.value = localStorage.getItem("password");
  }
}*/

// LOGIN validacija
function validateAndRedirect() {
  var email = document.querySelector("#exampleInputEmail1").value;
  var password = document.querySelector("#exampleInputPassword1").value;
  var rememberMe = document.querySelector("#exampleCheck1").checked;
  var emailErrorDiv = document.getElementById("emailError");
  var passwordErrorDiv = document.getElementById("passwordError");

  emailErrorDiv.innerText = "";
  emailErrorDiv.style.color = "";
  passwordErrorDiv.innerText = "";
  passwordErrorDiv.style.color = "";

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Provera praznih polja
  if (!email.trim()) {
      emailErrorDiv.innerText = "This field is required.";
      emailErrorDiv.style.color = "red";
  } else if (!emailRegex.test(email)) {
      emailErrorDiv.innerText =
          "Ups! Email Address is incorrect, it should contain @ and .com";
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
      passwordErrorDiv.style.color = "red";
  }

  if (emailErrorDiv.innerText === "" && passwordErrorDiv.innerText === "") {
      if (rememberMe) {
          // Set a cookie to remember the user
          localStorage.setItem("remember_me", "true");
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
      } else {
          // Clear the existing cookie
          localStorage.removeItem("remember_me");
          localStorage.removeItem("email");
          localStorage.removeItem("password");
      }

      window.location.href = "index.html";
  }

  return false; // Sprečava slanje forme
}

document.addEventListener("DOMContentLoaded", function() {
  handleRememberMe();
});



function validateAndRedirectSignUpCLIENT() {
  var email = document.querySelector("#exampleInputEmail2");
  var password = document.querySelector("#exampleInputPassword2");
  var repeatPassword = document.querySelector("#exampleInputPassword3");
  var accNumID = document.querySelector("#exampleInputAccNumID");


  var emailErrorDiv = document.querySelector(".emailError");
  var passwordErrorDiv = document.querySelector(".passwordError");
  var repeatPasswordErrorDiv = document.querySelector(".repeatPasswordError");
  var accNumIDDiv = document.querySelector(".accNumID");

  emailErrorDiv.innerText = "";
  emailErrorDiv.style.color = "";
  passwordErrorDiv.innerText = "";
  passwordErrorDiv.style.color = "";
  repeatPasswordErrorDiv.innerText = "";
  repeatPasswordErrorDiv.style.color = "";
  accNumIDDiv.innerText = "";
  accNumIDDiv.style.color = "";

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  var fields = [email, password, repeatPassword, accNumID];
  var isValid = true;

  for (var i = 0; i < fields.length; i++) {
      var fieldValue = fields[i].value.trim();
       
      var errorFields = fields[i].nextElementSibling;

      if(!fieldValue){
        isValid = false;
        errorFields.innerText = "This field is required.";
        errorFields.style.color = "red";
      }
  }
  var clientLogged = true;
  return isValid;






/*

  } else if (!emailRegex.test(email)) {
    emailErrorDiv.innerText =
      "Ups! Email Address is incorrect, it should contain @ and .com";
    emailErrorDiv.style.color = "red";
    return false;
  }*/

  /*if (!password.trim()) {
    passwordErrorDiv.innerText = "This field is required.";
    passwordErrorDiv.style.color = "red";
    return false;
  } else if (
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/\d/.test(password)
  ) {
    passwordErrorDiv.innerText =
      "Password should contain a minimum of 8 characters, one uppercase letter, and one digit.";
    passwordErrorDiv.style.color = "red";
    return false;
  }

  if (!repeatPassword.trim()) {
    repeatPasswordErrorDiv.innerText = "This field is required.";
    repeatPasswordErrorDiv.style.color = "red";
    return false;
  } else if (repeatPassword.trim() !== password.trim()) {
    repeatPasswordErrorDiv.innerText = "Ups! Passwords don't match.";
    repeatPasswordErrorDiv.style.color = "red";
    return false;
  }
  
  if (!accNumID.trim()) {
    accNumIDDiv.innerText = "This field is required.";
    accNumIDDiv.style.color = "red";
    return false;
  } else if (!/\d/.test(accNumID)) {
    accNumIDDiv.innerText = "Ups! Account membership ID should contain numbers only.";
    accNumIDDiv.style.color = "red";
    return false;
  }*/
  
  if (
    emailErrorDiv.innerText === "" &&
    passwordErrorDiv.innerText === "" &&
    repeatPasswordErrorDiv.innerText === "" &&
    accNumIDDiv.innerText === ""
  ) {
    var clientLogged = true;
    return true;
    // Manually submit the form
    //document.getElementById("clientSignUpForm").submit();
  }












  // promena navigacije ukoliko je ulogovan kao klijent
  if (clientLogged){
    fetch("clientHeader.html")
    .then((response) => response.text())
    .then((html) => {
    document.getElementById("lsNavigation").innerHTML = html;
    addActiveClassToLink();
  })
    .catch((error) => console.error("Error fetching navigation:", error));
    var diseaseAlertHeading = document.querySelector(".alert-heading");
    diseaseAlertHeading.style.display = "flex";
  }
}

// validacija CLINIC
function validateAndRedirectSignUpCLINICS() {
    var email = document.querySelector("#exampleInputEmail3").value;
    var password = document.querySelector("#exampleInputPassword4").value;
    var repeatPassword = document.querySelector("#exampleInputPassword5").value;
    var clinicsID = document.querySelector("#exampleInputPassword6").value;
    var emailErrorDiv = document.querySelector(".emailError2");
    var passwordErrorDiv = document.querySelector(".passwordError2");
    var repeatPasswordErrorDiv = document.querySelector(".repeatPasswordError2");
    var clinicsIDErrorDiv = document.querySelector(".clinicsId");
  

    emailErrorDiv.innerText = "";
    emailErrorDiv.style.color = "";
    passwordErrorDiv.innerText = "";
    passwordErrorDiv.style.color = "";
    repeatPasswordErrorDiv.innerText = "";
    repeatPasswordErrorDiv.style.color = "";
    clinicsIDErrorDiv.innerText = "";
    clinicsIDErrorDiv.style.color = "";
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
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
      window.location.href = "index.html";
    }
    // promena navigacije ukoliko je ulogovan kao klinika
    if (clinicsLogged){
      fetch("clinicsHeader.html")
      .then((response) => response.text())
      .then((html) => {
      document.getElementById("lsNavigation").innerHTML = html;
      addActiveClassToLink();
    })
      .catch((error) => console.error("Error fetching navigation:", error));
    }
}