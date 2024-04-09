function clientSignUpMembership() {
    var clientSignUpMembership = document.querySelector(".clientSignUpMembership");
    var signUpBtn = document.querySelector("button#singUpBtn").style.display="none";
  
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

function payClientMembership() {
    var accNum = document.getElementById("accNum").value;
    var accNumDiv = document.getElementById("accNumError");
    var regExp =/^[0-9]{4}[-]{0,1}[0-9]{4}[-]{0,1}[0-9]{4}[-]{0,1}[0-9]{4}$/;

    accNumDiv.innerText = "";
    accNumDiv.style.color = "";
  
    if (!accNum.trim()) {
      accNumDiv.innerText = "This field is required.";
      accNumDiv.style.color = "red";
    }else if(!regExp.test(accNum)) {
      accNumDiv.innerText = "Ups! Incorrect account number.";
      accNumDiv.style.color = "red";
    }
    if (accNumDiv.innerText === "") {
      var lsHeading = document.querySelector(".lsHeading").style.display="none";
      var clientMembershipPage = document.querySelector(".clientMembershipPage").style.display="none";
      var payClientMembership = document.querySelector(".payClientMembership"); //nestane ali kada kliknes ekran pojavi se
      payClientMembership.style.display="none";
      var accNumHeadingWrapper = document.querySelector(".accNumHeadingWrapper");
      accNumHeadingWrapper.style.cssText += "display: flex; flex-direction: column; gap: 10px;";
      var accNumberButton = document.querySelector(".accNumberButton").style.display="flex";
      var lsWrapper = document.querySelector("div#lswrapper").style.marginTop="50px";
    }
}
  
//button back 
function accNumBack() { //NE RADI SVE
    var accNumHeadingWrapper = document.querySelector(".accNumHeadingWrapper").style.display="none";
    var accNumberButton = document.querySelector(".accNumberButton").style.display="none";
    var signUpHeading = document.querySelector(".signUpHeading1"); //ne radi
    if (signUpHeading) {
        signUpHeading.style.display = "flex !important";
    }
    var lsHeading = document.querySelector(".lsHeading").style.display="flex";
    lsHeading.innerHTML = "SIGN UP"; //ne radi
    var lsAs = document.querySelector(".lsAs").style.display="flex"; //ne radi
    
    var signUpFormGroup = document.querySelectorAll(".signUpFormGroup");
    signUpFormGroup.forEach(function(element){
        element.style.display="block";
    });
    var singUpBtn = document.getElementById("singUpBtn");
    if (singUpBtn) {
        singUpBtn.style.display = "flex";
        singUpBtn.style.justifyContent = "center";
    }
}