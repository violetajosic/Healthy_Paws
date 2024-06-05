//Search bar
function showDropdown() {
    var ul = document.getElementById("myUL");
    ul.style.display = "block";
  
    document.getElementById("myInput").addEventListener("input", searchFunction);
  
    document.addEventListener("click", function (event) {
      var input = document.getElementById("myInput");
      var ul = document.getElementById("myUL");
  
      // check if mouse click is out of the input
      if (event.target !== input && !ul.contains(event.target)) {
        ul.style.display = "none";
      }
    });
  
    var dropdownItems = ul.getElementsByTagName("a");
    for (var i = 0; i < dropdownItems.length; i++) {
      dropdownItems[i].addEventListener("click", function (event) {
        document.getElementById("myInput").value = event.target.textContent;
  
        ul.style.display = "none";

        showClinicsForCity(event.target.textContent);
      });
    }
}

function showClinicsForCity(city) {
    hideAllClinicRows();
  
    // displaying clinics in cities
    var cityClass = getCityClass(city);
    var clinicRow = document.querySelector(".clinicsCityRow." + cityClass);
    clinicRow.style.display = "flex";
}

function hideAllClinicRows() {
    var clinicRows = document.querySelectorAll(".clinicsCityRow");
    clinicRows.forEach(function (row) {
      row.style.display = "none";
    });
  }
  
function getCityClass(city) {
    var cityClassMap = {
      Belgrade: "BG",
      Pancevo: "PA",
      "Novi Sad": "NS",
      Subotica: "SU",
    };
  
    // displaying city
    return cityClassMap[city];
}

function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
  
    if (filter === "") {
      // if the input is empty show all cities
      var cityRows = document.querySelectorAll(".clinicsCityRow");
      cityRows.forEach(function (row) {
        row.style.display = "";
      });
    } else {
      // if the input is not empty show required city
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }
  }
  