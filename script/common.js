//navigacija deffault
fetch("header.html")
  .then((response) => response.text())
  .then((html) => {

    // ubacivanje fetch-a u id
    document.getElementById("navigation").innerHTML = html;

    // active klasa sa zutim podvlacenjem na trenutnoj strani
    addActiveClassToLink();
  
  })
  .catch((error) => console.error("Error fetching navigation:", error));

//heading .active class
function addActiveClassToLink() {
  // dohvatanje trenutne strane
  var currentPagePath = window.location.pathname;

  // selektovanje svih linkova iz meni navigacije
  var navLinks = document.querySelectorAll(".navbar-nav a");

  // iteracija kroz svaki link i dodavanje active klase
  navLinks.forEach(function (link) {
    var linkPath1 = document.querySelector(".index");
    var linkPath2 = document.querySelector(".about");
    var linkPath3 = document.querySelector(".clinics");
    var linkPath4 = document.querySelector(".diseases");
    var linkPath5 = document.querySelector(".ls");
    var linkPath6 = document.querySelector(".helpLink");
    var linkPath7 = document.querySelector(".profileLink");
    var linkPath8 = document.querySelector(".mncLink");

    if (currentPagePath.includes("index.html")) {
      linkPath1.classList.add("active");
    } else if (currentPagePath.includes("about.html")) {
      linkPath2.classList.add("active");
    } else if (currentPagePath.includes("clinics.html")) {
      linkPath3.classList.add("active");
    } else if (currentPagePath.includes("diseases.html")) {
      linkPath4.classList.add("active");
    } else if (currentPagePath.includes("ls.html")) {
      linkPath5.classList.add("active");
    } else if (currentPagePath.includes("help.html")) {
      linkPath6.classList.add("active");
    }else if (currentPagePath.includes("profile.html")) {
      linkPath7.classList.add("active");
    }else if (currentPagePath.includes("mnc.html")) {
      linkPath8.classList.add("active");
    }else {
      console.log("Something went wrong" + error);
    }
  });
}