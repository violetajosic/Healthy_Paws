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