//appointments
var vetInputTable = document.querySelector(".vetInputTable").style.display = "flex";

document.querySelector(".vetInputTable").style.display = "flex";

function addNewData() {
    var diseaseName = document.getElementById('diseaseNameInput').value;
    var symptoms = document.getElementById('symptomsAdd').value;
    var therapy = document.getElementById('therapyAdd').value;
    var doctorInfo = document.getElementById('signAdd').value;
    var clinicIDInfo = document.getElementById('signAdd2').value;

    var errorcatalogDiseaseName = document.getElementById('errorcatalogDiseaseName');
    var errorSymptoms = document.getElementById('errorSymptoms');
    var errorTherapy = document.getElementById('errorTherapy');
    var errorDoctor = document.getElementById('errorDoctor');
    var errorClinicID = document.getElementById('errorClinicID');

    var isValid = true;

    errorcatalogDiseaseName.innerText = ''; // Clear previous error messages
    errorSymptoms.innerText = '';
    errorTherapy.innerText = '';
    errorDoctor.innerText = '';
    errorClinicID.innerText = '';

    if (diseaseName.trim() === '') {
        errorcatalogDiseaseName.innerText = 'This field is required.';
        errorcatalogDiseaseName.style.color = 'red';
        isValid = false;
    }
    if (symptoms.trim() === '') {
        errorSymptoms.innerText = 'This field is required.';
        errorSymptoms.style.color = 'red';
        isValid = false;
    }
    if (therapy.trim() === '') {
        errorTherapy.innerText = 'This field is required.';
        errorTherapy.style.color = 'red';
        isValid = false;
    }
    if (doctorInfo.trim() === '') {
        errorDoctor.innerText = 'This field is required.';
        errorDoctor.style.color = 'red';
        isValid = false;
    }
    if (clinicIDInfo.trim() === '') {
        errorClinicID.innerText = 'This field is required.';
        errorClinicID.style.color = 'red';
        isValid = false;
    } else if (!/^\d+$/.test(clinicIDInfo)) {
        errorClinicID.innerText = "ID should contain digits only.";
        errorClinicID.style.color = "red";
        isValid = false;
    }

    if (isValid) {
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();

        // Format date - DD.MM.YY
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

        var vetInputTable = document.querySelector(".vetInputTable");
        var parentContainer = document.querySelector(".help-secondWrapper");
        parentContainer.insertBefore(newDiv, vetInputTable);
    }

    return isValid;
}

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        if (!addNewData()) {
            event.preventDefault(); // Prevent default form submission if validation fails
        }
    });
});
