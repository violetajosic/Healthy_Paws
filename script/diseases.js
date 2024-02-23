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
  