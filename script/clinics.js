//Search bar
function showDropdown() {
    // Dobavljanje referenci na HTML elemente
    var ul = document.getElementById("myUL");
    ul.style.display = "block";
  
    // Povezivanje funkcije za pretragu na događaj "input" input polja
    document.getElementById("myInput").addEventListener("input", searchFunction);
  
    // Povezivanje događaja "click" na dokumentu kako bi se sakrio dropdown
    document.addEventListener("click", function (event) {
      var input = document.getElementById("myInput");
      var ul = document.getElementById("myUL");
  
      // Provera da li je klik van input polja i dropdown-a
      if (event.target !== input && !ul.contains(event.target)) {
        ul.style.display = "none";
      }
    });
  
    // Povezivanje događaja "click" na stavke dropdown-a
    var dropdownItems = ul.getElementsByTagName("a");
    for (var i = 0; i < dropdownItems.length; i++) {
      dropdownItems[i].addEventListener("click", function (event) {
        // Ažuriranje teksta input polja sa tekstom kliknutog elementa
        document.getElementById("myInput").value = event.target.textContent;
  
        // Sakrivanje dropdown-a
        ul.style.display = "none";
  
        // Prikazivanje klinika za izabrani grad
        showClinicsForCity(event.target.textContent);
      });
    }
}

function showClinicsForCity(city) {
    // Sakrivanje svih redova sa klinikama
    hideAllClinicRows();
  
    // Prikazivanje reda sa klinikama za izabrani grad
    var cityClass = getCityClass(city);
    var clinicRow = document.querySelector(".clinicsCityRow." + cityClass);
    clinicRow.style.display = "flex";
}

function hideAllClinicRows() {
    // Sakrivanje svih redova sa klinikama
    var clinicRows = document.querySelectorAll(".clinicsCityRow");
    clinicRows.forEach(function (row) {
      row.style.display = "none";
    });
  }
  
function getCityClass(city) {
    // Mapiranje imena gradova na odgovarajuće klase
    var cityClassMap = {
      Belgrade: "BG",
      Pancevo: "PA",
      "Novi Sad": "NS",
      Subotica: "SU",
    };
  
    // Vraćanje odgovarajuće klase za izabrani grad
    return cityClassMap[city];
}

function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
  
    if (filter === "") {
      // Ako je input prazan, prikaži sve redove sa gradovima
      var cityRows = document.querySelectorAll(".clinicsCityRow");
      cityRows.forEach(function (row) {
        row.style.display = "";
      });
    } else {
      // Ako input nije prazan, filtriraj gradove na osnovu unosa
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
  