var vetInputTable = document.querySelector(".vetInputTable").style.display="flex";

//dodavanje novog pregleda
// Display .vetInputTable when the page loads
document.querySelector(".vetInputTable").style.display = "flex";

//dodavanje novog pregleda
function addNewData() {
    // Retrieve input values
    var diseaseName = document.getElementById('diseaseNameInput').value;
    var symptoms = document.getElementById('symptomsAdd').value;
    var therapy = document.getElementById('terapyAdd').value;
    var doctorInfo = document.getElementById('signAdd').value;

    // Get the current date
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Months are zero-based
    var year = currentDate.getFullYear();
    
    // Format the date as DD.MM.YY
    var formattedDate = day + '.' + month + '.' + year;

    // Create a new div element
    var newDiv = document.createElement('div');
    newDiv.className = 'row-12 vetTable';

    // Create the inner HTML structure based on the user inputs and current date
    newDiv.innerHTML = `
        <div class="row-12 vetTableHeading">
            <div class="col-6 vetTableHeadingCol">
                <h6>${diseaseName}</h6>
            </div>
            <div class="col-6 vetTableHeadingCol vetDate">
                <h6>${formattedDate}</h6>
            </div>
        </div>
        <div class="row-12 vetTableInfo">
            <ul>
                <li class="col-12 vetInfo symptomsInfo">Spisak simptoma: ${symptoms}</li>
                <li class="col-12 vetInfo terapyInfo">Data terapija: ${therapy}</li>
                <li class="col-12 vetInfo signInfo">Potpis lekara i veterinarske klinike: ${doctorInfo}</li>
            </ul>
        </div>
    `;

    // Find the .vetInputTable element
    var vetInputTable = document.querySelector(".vetInputTable");

    // Find the parent container of .vetInputTable
    var parentContainer = document.querySelector(".help-secondWrapper");

    // Insert the new div below the last .vetTable but above .vetInputTable
    parentContainer.insertBefore(newDiv, vetInputTable);

    // Send data to PHP for saving
    saveDataToDatabase(diseaseName, formattedDate, symptoms, therapy, doctorInfo);
}