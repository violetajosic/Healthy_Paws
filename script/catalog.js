var vetInputTable = document.querySelector(".vetInputTable").style.display="flex";

//dodavanje novog pregleda
document.querySelector(".vetInputTable").style.display = "flex";

//dodavanje novog pregleda
function addNewData() {
    var diseaseName = document.getElementById('diseaseNameInput').value;
    var symptoms = document.getElementById('symptomsAdd').value;
    var therapy = document.getElementById('therapyAdd').value;
    var doctorInfo = document.getElementById('signAdd').value;
    var clinicIDInfo = document.getElementById('signAdd2').value;

    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    
    //format datuma - DD.MM.YY
    var formattedDate = day + '.' + month + '.' + year;

    var newDiv = document.createElement('div');
    newDiv.className = 'row-12 vetTable';

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
    `;

    // Find the .vetInputTable element
    var vetInputTable = document.querySelector(".vetInputTable");

    // Find the parent container of .vetInputTable
    var parentContainer = document.querySelector(".help-secondWrapper");

    // Insert the new div below the last .vetTable but above .vetInputTable
    parentContainer.insertBefore(newDiv, vetInputTable);

    // Send data to PHP for saving
    saveDataToDatabase(diseaseName, formattedDate, symptoms, therapy, doctorInfo, clinicIDInfo);
}


