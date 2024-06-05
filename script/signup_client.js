// SIGN UP CLIENT
function validateAndRedirectSignUpCLIENT() {
    var email = document.querySelector("#exampleInputEmail2").value;
    var password = document.querySelector("#exampleInputPassword2").value;
    var repeatPassword = document.querySelector("#exampleInputPassword3").value;
    var accNumID = document.querySelector("#exampleInputAccNumID").value;
  
    var emailErrorDiv = document.querySelector(".emailError");
    var passwordErrorDiv = document.querySelector(".passwordError");
    var repeatPasswordErrorDiv = document.querySelector(".repeatPasswordError");
    var accNumIDDiv = document.querySelector(".accNumID");
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValid = true;
  
    if (!email.trim()) {
      emailErrorDiv.innerText = "This field is required.";
      emailErrorDiv.style.color = "red";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      emailErrorDiv.innerText = "Ups! Email Address is incorrect, it should contain @ and .com";
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
      passwordErrorDiv.innerText = "Password should contain a minimum of 8 characters, one uppercase letter, and one digit.";
      passwordErrorDiv.style.color = "red";
      isValid = false;
    } else {
      passwordErrorDiv.innerText = "✅";
    }

    if (!repeatPassword.trim()) {
      repeatPasswordErrorDiv.innerText = "This field is required.";
      repeatPasswordErrorDiv.style.color = "red";
      isValid = false;
    } else if (repeatPassword.trim() !== password.trim()) {
      repeatPasswordErrorDiv.innerText = "Ups! Passwords don't match.";
      repeatPasswordErrorDiv.style.color = "red";
      isValid = false;
    } else {
      repeatPasswordErrorDiv.innerText = "✅";
    }

    if (!accNumID.trim()) {
      accNumIDDiv.innerText = "This field is required.";
      accNumIDDiv.style.color = "red";
      isValid = false;
    } else if (!/\d/.test(accNumID)) {
      accNumIDDiv.innerText = "Ups! Account membership ID should contain numbers only.";
      accNumIDDiv.style.color = "red";
      isValid = false;
    } else {
      accNumIDDiv.innerText = "✅";
    }
    
    var clientLogged = true;
  
    if (!isValid) {
      return false;
    }
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'signup_client.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      console.log("usao u ajax");
      if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText); //ovde je greska
          if (response.status === 'failed') {
              console.log("emajl postoji");
              if (response.data === 'Email already exists.') {
                  emailErrorDiv.innerText = "Email already exists. Please use a different email address.";
                  emailErrorDiv.style.color = "red";
              }
              isValid = false;
          } else {
              window.location.href = 'log.html';
          }
      }
    };
    xhr.send('myemail=' + encodeURIComponent(email) + '&mypassword=' + encodeURIComponent(password) + '&accMemId=' + encodeURIComponent(accNumID));
  
    return false; // Prevent form submission
}
