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
  
        function fontSizes() {
          var windowWidth = window.innerWidth;
      
          var breakpoints = {
              xsmall : 576,
              small: 600,
              medium: 1000,
              xl: 1200,
          };

          var fontSizes = {
              xsmall : "25px",
              small: "30px",
              medium: "35px",
              xl: "40px"
          };
      
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
      
          var lsHeadingh1 = document.querySelector(".lsHeading h1");
          lsHeadingh1.style.setProperty("font-size", fontSize, "important");
          var clientMembershipPay = document.querySelector(".clientMembershipPay").style.display="none";
          var payClientMembership = document.querySelector(".payClientMembership").style.display="flex";
      }
      
      fontSizes();
      window.addEventListener('resize', fontSizes);
  
        var lsAs = document.querySelector(".lsAs h5").style.display = "none";
        var signUpHeading1 = document.querySelector(".signUpHeading1 h3").style.display = "none";
  
        var signUpFormGroup = document.querySelectorAll(".signUpFormGroup");
        signUpFormGroup.forEach(function (element) {
            element.style.display = "none";
        });
  
        var clientMembershipPay = document.querySelectorAll(".clientMembershipPay").style.display = "none";
  
        var signUpButtonPay = document.querySelectorAll(".btn.btn-primary.clinicsLSBtn.loginBtn.mt-4 button").style.display = "none";
  
        var lsSwitchElements = document.querySelector(".row.mb-5.lsSwitch").style.setProperty("display", "none", "important"); //ne radi
  }
}
function payClientMembership() {
    var accNum = document.getElementById("accNum").value;
    var accNumDiv = document.getElementById("accNumError");
    var regExp =/^[1-9-]{4}-[1-9-]{4}-[1-9-]{4}-[1-9-]{4}$/;

    accNumDiv.innerText = "";
    accNumDiv.style.color = "";
  
    if (!accNum.trim()) {
      accNumDiv.innerText = "This field is required.";
      accNumDiv.style.color = "red";
    }else if(!regExp.test(accNum)) {
      accNumDiv.innerText = " ";
      accNumDiv.style.color = "red";
    }
    if (accNumDiv.innerText === "") {
      var lsHeading = document.querySelector(".lsHeading").style.display="none";
      var clientMembershipPage = document.querySelector(".clientMembershipPage").style.display="none";
      var payClientMembership = document.querySelector(".payClientMembership");
      if (payClientMembership) {
          payClientMembership.style.setProperty("display", "none", "important"); //ne radi
      }
      var accNumHeadingWrapper = document.querySelector(".accNumHeadingWrapper");
      accNumHeadingWrapper.style.cssText += "display: flex; flex-direction: column; gap: 10px;";
      var accNumberButton = document.querySelector(".accNumberButton").style.display="flex";
      var lsWrapper = document.getElementById("lswrapper");
      lsWrapper.style.marginTop = "200px";
      lsWrapper.style.setProperty("margin-top", "150px", "important");

      var accNumElement = document.querySelector('.accNumIDHeading-ID h1');

      var randomNumberText = document.getElementById("randomNumberText");
      var randomNumber = Math.floor(Math.random() * 900000) + 100000;

      randomNumberText.textContent = randomNumber;
    }
}
  
//button back
function accNumBack() {
    window.location.href = "ls.html";
}