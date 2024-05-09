var vetInputTable = document.querySelector(".vetInputTable").style.display="flex";

//dodavanje novog pregleda
document.querySelector(".vetInputTable").style.display = "flex";

//dodavanje novog pregleda funkcija
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

    if (diseaseName.trim() === '') {
        errorcatalogDiseaseName.innerText = 'This field is required.';
        errorcatalogDiseaseName.style.color = 'red';
    }
    if (symptoms.trim() === '') {
        errorSymptoms.innerText = 'This field is required.';
        errorSymptoms.style.color = 'red';
    }
    if (therapy.trim() === '') {
        errorTherapy.innerText = 'This field is required.';
        errorTherapy.style.color = 'red';
    }
    if (doctorInfo.trim() === '') {
        errorDoctor.innerText = 'This field is required.';
        errorDoctor.style.color = 'red';
    }
    if (clinicIDInfo.trim() === '') {
        errorClinicID.innerText = 'This field is required.';
        errorClinicID.style.color = 'red';
    }else if(!/^\d+$/.test(clinicIDInfo)) {
        errorClinicID.innerText = "ID should contain digits only.";
        errorClinicID.style.color = "red";

    if (errorcatalogDiseaseName === "" &&
        errorSymptoms === "" &&
        errorTherapy === "" &&
        errorDoctor === "" &&
        errorClinicID === ""
    ){  
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
    
        var vetInputTable = document.querySelector(".vetInputTable");
    
        var parentContainer = document.querySelector(".help-secondWrapper");
    
        parentContainer.insertBefore(newDiv, vetInputTable);
    
    
        // asinhrono dohvati php
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "catalog.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // ako je uspesno
                    console.log("uspesno");
                } else {
                    // neuspesno
                    console.error("Error:", xhr.responseText);
                }
            }
        };
        // Send the data as a query string
        var data = "catalogDiseaseName=" + encodeURIComponent(diseaseName) + "&catolgDate=" + encodeURIComponent(formattedDate) + "&catalogSympt=" + encodeURIComponent(symptoms) + "&catalogTherapy=" + encodeURIComponent(therapy) + "&catalogDoctor=" + encodeURIComponent(doctorInfo) + "&catalogClinicID=" + encodeURIComponent(clinicIDInfo);
        xhr.send(data);
        }
    }
}
//ako u html obrisem action i post, a ovde ostavim, js se odradi u sekundi i odmah refresuje stranicu