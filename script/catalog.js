var vetInputTable = document.querySelector(".vetInputTable").style.display="flex";

//dodavanje novog pregleda
// Display .vetInputTable when the page loads
document.querySelector(".vetInputTable").style.display = "flex";

//dodavanje novog pregleda
function addNewData() {
    // Retrieve input values
    var diseaseName = document.getElementById('diseaseNameInput').value;
    var symptoms = document.getElementById('symptomsAdd').value;
    var therapy = document.getElementById('therapyAdd').value;
    var doctorInfo = document.getElementById('signAdd').value;
    var clinicIDInfo = document.getElementById('signAdd2').value;

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
        <div class="row-12 vetTableHeading vetInputHeading editCatalog">
            <div class="col-6 vetTableHeadingCol">
                <h6>${diseaseName}</h6>
            </div>
            <div class="col-6 vetTableHeadingCol vetDate">
                <h6>${formattedDate}</h6>
            </div>
        </div>
        <div class="row-12 vetTableInfo editCatalog">
            <ul>
                <li class="col-12 vetInfo symptomsInfo" data-field="symptoms">Symptoms: <span class="editable" contenteditable="false">${symptoms}</span></li>
                <li class="col-12 vetInfo therapyInfo" data-field="therapy">Therapy: <span class="editable" contenteditable="false">${therapy}</span></li>
                <li class="col-12 vetInfo signInfo" data-field="doctorInfo">Doctor signature: <span class="editable" contenteditable="false">${doctorInfo}</span></li>
                <li class="col-12 vetInfo signInfo2" data-field="clinicIDInfo">Clinic ID: <span class="editable" contenteditable="false">${clinicIDInfo}</span></li>
            </ul>
        </div>
        <div class="catalogEdit">
            <button type="submit" class="edit-button">Edit</button>
            <button type="submit" class="end-editing">Apply</button>
        </div>
    `;

    // Find the .vetInputTable element
    var vetInputTable = document.querySelector(".vetInputTable");

    // Find the parent container of .vetInputTable
    var parentContainer = document.querySelector(".help-secondWrapper");

    // Insert the new div below the last .vetTable but above .vetInputTable
    parentContainer.insertBefore(newDiv, vetInputTable);

    // Send data to PHP for saving
    saveDataToDatabase(diseaseName, formattedDate, symptoms, therapy, doctorInfo, clinicIDInfo);

    //edit deo
    const editCatalog = document.querySelector(".čeditCatalog"); //deo koji moze da se edituje
    const edit_button = document.getElementById("edit-button");
    const end_button = document.getElementById("end-editing");

    edit_button.addEventListener("click", function() {
        editCatalog.contentEditable = true;
        editCatalog.style.backgroundColor = "#dddbdb";
    });

    end_button.addEventListener("click", function() {
        editCatalog.contentEditable = false;
        paragraph.style.backgroundColor = "#ffe44d";
    })
}