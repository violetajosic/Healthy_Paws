function find() {
  document.querySelector(".diseases-list-wrapper").style.display = "none";
  const symptoms = [
      "vomiting", "diarrhea", "weightLoss", "unexplainedBleeding",
      "changesInActivity", "lethargy", "fearOfTouch", "cough",
      "difficultyBreathing", "sneezing", "nasalDischarge", "swellingOrLumps",
      "redEyes", "lightSensitivity", "stomachPain", "difficultySwallowing",
      "lossOfBalance", "coordinationProblems", "seizures",
      "lossOfConsciousness", "difficultyMoving", "weaknessInLegs",
      "frequentInfections", "autoimmuneReactions"
  ];

  const diseases = {
    vomiting: ["canine-Parvovirus", "cwd"],
    diarrhea: ["canine-Parvovirus", "cwd"],
    weightLoss: ["canine-Parvovirus", "cwd"],
    unexplainedBleeding: ["canine-Parvovirus", "rhd"],
    changesInActivity: ["cwd"],
    lethargy: ["canine-Parvovirus", "cwd"],
    fearOfTouch: ["canine-Parvovirus", "cwd"],
    cough: ["canine-Parvovirus", "equineInfluenza", "canineDistemper", "ehv", "brsv"],
    difficultyBreathing: ["equineInfluenza", "avianInfluenza", "brsv"],
    sneezing: ["feLV", "avianInfluenza"],
    nasalDischarge: ["feLV", "canineDistemper", "ehv"],
    swellingOrLumps: ["rhd"],
    redEyes: ["feLV"],
    lightSensitivity: ["feLV"],
    stomachPain: ["canine-Parvovirus", "cwd"],
    difficultySwallowing: ["canine-Parvovirus", "cwd"],
    lossOfBalance: ["canineDistemper"],
    coordinationProblems: ["ehv"],
    seizures: ["avianInfluenza", "canineDistemper"],
    lossOfConsciousness: ["ehv"],
    difficultyMoving: ["cwd"],
    weaknessInLegs: ["cwd"],
    frequentInfections: ["avianInfluenza", "canineDistemper", "fiv"],
    autoimmuneReactions: ["fiv"],
};

  const headingElement = document.querySelector(".diseasesHeadingChange h3");
  const diseaseAlertHeading = document.querySelector(".alert-heading");

  let selectedDiseases = [];

  symptoms.forEach(symptom => {
      const checkbox = document.getElementById(symptom);
      if (checkbox && checkbox.checked) {
          selectedDiseases = selectedDiseases.concat(diseases[symptom] || []);
      }
  });

  if (selectedDiseases.length > 0) {
      selectedDiseases.forEach(disease => {
          const example = document.querySelector(`.${disease}`);
          if (example) {
              example.style.display = "flex";
          }
      });
  } else {
      headingElement.innerHTML = "Please go back and check some symptoms.";
      headingElement.style.color = "red";
      diseaseAlertHeading.style.display = "none";
  }
}
