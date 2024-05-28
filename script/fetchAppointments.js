document.addEventListener("DOMContentLoaded", function () {
    fetchAppointments();

    // Function to fetch appointments from the database
    function fetchAppointments() {
        fetch('fetchAppointments.php')
        .then(response => response.json())
        .then(data => {
            displayAppointments(data);
        })
        .catch(error => console.error('Error fetching appointments:', error));
    }

    // Function to display filtered appointments
    function displayAppointments(appointments) {
        var parentContainer = document.getElementById("appointmentContainer");
        parentContainer.innerHTML = '';

        // Retrieve the catalog ID from local storage
        var catalogID = localStorage.getItem('catalogID');

        // Filter appointments by catalog ID
        var filteredAppointments = appointments.filter(function(appointment) {
            return appointment.catalog_id === catalogID;
        });

        // Display the filtered appointments
        filteredAppointments.forEach(function(appointment) {
            var newDiv = document.createElement('div');
            newDiv.className = 'row-12 vetTable';

            var formattedDate = new Date(appointment.appointment_date).toLocaleDateString();

            newDiv.innerHTML = `
                <div class="row-12 vetTableHeading vetInputHeading editCatalog">
                    <div class="col-1 vetTableHeadingCol vetCatalogID">
                        <h6>${appointment.catalog_id}</h6>
                    </div>
                    <div class="col-7 vetTableHeadingCol">
                        <h6>${appointment.disease_name}</h6>
                    </div>
                    <div class="col-4 vetTableHeadingCol vetDate">
                        <h6>${formattedDate}</h6>
                    </div>
                </div>
                <div class="row-12 vetTableInfo editCatalog">
                    <ul>
                        <li class="col-12 vetInfo symptomsInfo" data-field="symptoms">Symptoms: <span class="editable" contenteditable="false">${appointment.symptoms}</span></li>
                        <li class="col-12 vetInfo therapyInfo" data-field="therapy">Therapy: <span class="editable" contenteditable="false">${appointment.therapy}</span></li>
                        <li class="col-12 vetInfo signInfo" data-field="doctorInfo">Doctor signature: <span class="editable" contenteditable="false">${appointment.doctor_info}</span></li>
                        <li class="col-12 vetInfo signInfo2" data-field="clinicIDInfo">Clinic ID: <span class="editable" contenteditable="false">${appointment.clinic_id}</span></li>
                    </ul>
                </div>
            `;
            parentContainer.appendChild(newDiv);
        });
    }
});
