function validateAndRedirectSignUpCLINIC() {
    var email = document.querySelector("#exampleInputEmail3").value;
    var password = document.querySelector("#exampleInputPassword4").value;
    var repeatPassword = document.querySelector("#exampleInputPassword5").value;
    var clinicsID = document.querySelector("#exampleInputPassword6").value;
  
    var emailErrorDiv = document.querySelector(".emailError2");
    var passwordErrorDiv = document.querySelector(".passwordError2");
    var repeatPasswordErrorDiv = document.querySelector(".repeatPasswordError2");
    var clinicsIDErrorDiv = document.querySelector(".clinicsId");
  
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
    if (!clinicsID.trim()) {
        clinicsIDErrorDiv.innerText = "This field is required.";
        clinicsIDErrorDiv.style.color = "red";
        isValid = false;
    } else if (!/^\d+$/.test(clinicsID)) {
        clinicsIDErrorDiv.innerText = "ID should contain digits only.";
        clinicsIDErrorDiv.style.color = "red";
        isValid = false;
    } else {
        clinicsIDErrorDiv.innerText = "✅";
    }
  
    if (!isValid) {
        return false;
    }
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'signup_clinic.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        console.log("usao u ajax");
        if (xhr.status === 200) {
            try {
                var response = JSON.parse(xhr.responseText);
                if (response.status === 'failed') {
                    console.log("email postoji");
                    if (response.data === 'Email already exists.') {
                        emailErrorDiv.innerText = "Email already exists. Please use a different email address.";
                        emailErrorDiv.style.color = "red";
                    } else if (response.data === 'Clinic ID already exists.') {
                        clinicsIDErrorDiv.innerText = "Clinic ID already exists. Please use a different clinic ID.";
                        clinicsIDErrorDiv.style.color = "red";
                    }
                } else {
                    window.location.href = 'log.html';
                }
            } catch (e) {
                console.error("Failed to parse JSON response: ", xhr.responseText);
            }
        }
    };
    xhr.onerror = function () {
        console.error("Request failed");
    };
    xhr.send('myemail=' + encodeURIComponent(email) + '&mypassword=' + encodeURIComponent(password) + '&clinics_id=' + encodeURIComponent(clinicsID));
  
    return false;
  }
  
  
