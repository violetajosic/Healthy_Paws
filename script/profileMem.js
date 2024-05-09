function profileMembership (){
    document.querySelector(".profileHeadingRow").style.display="none";
    document.querySelector(".profileRow").style.display="none";
    document.querySelector(".profileButton").style.display="none";
    var logBtn = document.querySelector("button.profileClientBtn"); 
    logBtn.style.display="none !important";//ne radi da sakrije log out dugme
    document.querySelector(".profileMembershipAfter").style.display="flex";
    document.querySelector(".profileAfterBtn").style.display="flex";
    document.querySelector(".profileAfterBtnPay").style.display="flex";
}

function profileMemInput(){
    var profileMemInput = document.getElementById ('profileMemInput').value;
    var errorProfileMem = document.getElementById("errorProfileMem");

    var regex = /^[1-9-]{4}-[1-9-]{4}-[1-9-]{4}-[1-9-]{4}$/;

    if (!regex.test(profileMemInput)) {
        errorProfileMem.innerText = "Ups! Incorrect account number.";
        errorProfileMem.style.color = "red";
    }
}