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

function validateAndRedirect() {
    var email = document.querySelector("#exampleInputEmail1").value;
    var password = document.querySelector("#exampleInputPassword1").value;
  
    var emailErrorDiv = document.getElementById("emailError");
    var passwordErrorDiv = document.getElementById("passwordError");
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValid = true;
  
    // Client-side validation
    if (!email.trim()) {
        emailErrorDiv.innerText = "This field is required.";
        emailErrorDiv.style.color = "red";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailErrorDiv.innerText = "Ups! Email Address is incorrect, it should contain @ and.com";
        emailErrorDiv.style.color = "red";
        isValid = false;
    } else {
        emailErrorDiv.innerText = "✅";
    }
    
    if (!password.trim()) {
        passwordErrorDiv.innerText = "This field is required.";
        passwordErrorDiv.style.color = "red";
        isValid = false;
    } else if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        passwordErrorDiv.innerText = "Ups! Password is incorrect.";
        passwordErrorDiv.style.color = "red";
        isValid = false;
    } else {
        passwordErrorDiv.innerText = "✅";
    }
  
    if (!isValid) {
        return false;
    }
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'logIn.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.status === 'failed') {
                if (response.data === 'Ups! Password is incorrect.') {
                    passwordErrorDiv.innerText = "Ups! Password is incorrect.";
                    passwordErrorDiv.style.color = "red";
                } else if (response.data === 'Login failed. Invalid email or password.') {
                    passwordErrorDiv.innerText = "Ups! Somewhere is problem.";
                    passwordErrorDiv.style.color = "red";
                    emailErrorDiv.innerText = "Ups! Somewhere is problem.";
                    emailErrorDiv.style.color = "red";
                }
                isValid = false;
            } else {
                window.location.href = 'index.html';
            }
        }
    };
    xhr.send('myemail=' + encodeURIComponent(email) + '&mypassword=' + encodeURIComponent(password));
  
    return false; 
  }
  

/*document.addEventListener("DOMContentLoaded", function() {
  handleRememberMe();
});*/

  
  //promena navigacije ukoliko je ulogovan kao klijent
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