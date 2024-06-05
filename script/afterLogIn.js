document.addEventListener('DOMContentLoaded', function () {
    function loadHeaders() {
        $.ajax({
            url: 'logIn.php',
            method: 'GET',
            dataType: 'json',
            success: function (response) {
                if (response.status === 'success' && response.data) {
                    var userData = response.data;
                    console.log(userData);

                    if (userData.loginClient) {
                        console.log('Client is logged in.');
                        fetch("clientHeader.html")
                            .then((response) => {
                                if (!response.ok) {
                                    throw new Error("Network response was not ok");
                                }
                                return response.text();
                            })
                            .then((html) => {
                                document.getElementById("navigation").innerHTML = html;
                                addActiveClassToLink();
                            })
                            .catch((error) => console.error("Error fetching clientHeader:", error));

                        if (window.location.pathname.includes('index.html')) {
                            document.querySelector(".indexH1 h1").innerHTML = 'Welcome to the <span style="font-family: Chicle, serif;"><span style="color: black; letter-spacing: 1px;">Healthy</span> <span style="color: #FFD95A; letter-spacing: 1px;">Paws</span></span>';
                            document.querySelector(".indexH1 h2").innerHTML = 'Type below the <span style="color:#FFD95A; font-weight:bold">CATALOG ID</span> that you got from a veterinarian.';
                            document.querySelector(".indexBtn-abs h4").innerHTML = 'Type your ID here..';
                            document.querySelector(".indexBtn-abs").style.display = "none";
                            document.querySelector(".IDSearchClinic").style.display = "flex";
                        }

                        if (window.location.pathname.includes('profile.html')) {
                            document.querySelector("#profileSD").style.display = "flex";
                            document.querySelector("#profileSDClinic").style.display = "none";
                        }
                    } else if (userData.loginClinics) {
                        console.log('Clinic is logged in.');
                        fetch("clinicsHeader.html")
                            .then((response) => {
                                if (!response.ok) {
                                    throw new Error("Network response was not ok");
                                }
                                return response.text();
                            })
                            .then((html) => {
                                document.getElementById("navigation").innerHTML = html;
                                addActiveClassToLink();
                            })
                            .catch((error) => console.error("Error fetching clinicsHeader:", error));

                        if (window.location.pathname.includes('index.html')) {
                            document.querySelector(".indexH1 h1").innerHTML = 'Thank you for contributing to a better society <br> and safety of our loved ones <br> with <span style="font-family: Chicle, serif; color:black; font-weight:bold; letter-spacing: 1px;">Healthy <span style="color:#FFD95A; letter-spacing: 1px;">Paws</span></span>';
                            function adjustFontSize() {
                                var windowWidth = window.innerWidth;
                                var breakpoints = { xsmall: 570, small: 600, medium: 1000, xl: 1200 };
                                var fontSizes = { xsmall: "25px", small: "30px", medium: "35px", xl: "40px" };
                                var fontSize = windowWidth < breakpoints.xsmall ? fontSizes.xsmall : windowWidth < breakpoints.small ? fontSizes.small : windowWidth < breakpoints.medium ? fontSizes.medium : fontSizes.xl;
                                document.querySelector(".indexH1 h1").style.fontSize = fontSize;
                            }
                            adjustFontSize();
                            window.addEventListener('resize', adjustFontSize);
                            document.querySelector(".indexH1 h2").style.display = "none";
                            document.querySelector(".indexBtn-abs h4").innerHTML = 'Type catalog ID..';
                            document.querySelector(".indexBtn-abs").style.display = "none";
                            document.querySelector(".IDSearchClinic").style.display = "flex";

                            function findID() {
                                var catalogID = document.getElementById('searchInput').value;
                                $.ajax({
                                    type: 'POST',
                                    url: 'catalog.html',
                                    data: { catalogID: catalogID },
                                    success: function (response) {
                                        $('.catalogIDCol h4').html(response);
                                    },
                                    error: function () {
                                        alert('Error fetching data.');
                                    }
                                });
                            }
                            findID();
                        }

                        if (window.location.pathname.includes('help.html')) {
                            document.querySelector('.mNC').style.display = "flex";
                        }

                        if (window.location.pathname.includes('diseases.html')) {
                            document.querySelector(".alert-heading").style.display = "none";
                        }

                        if (window.location.pathname.includes('profile.html')) {
                            document.querySelector(".profileButton").style.display = "none";
                            document.querySelector("#profileED").style.display = "none";
                            document.querySelector("#profileCID").style.display = "none";
                            document.querySelector("#profileSD").style.display = "none";
                            document.querySelector("#profileSDClinic").style.display = "flex";
                            document.querySelector("#profileCLID").style.display = "flex";
                        }

                        if (window.location.pathname.includes('catalog.html')) {
                            document.querySelector(".vetInputTable").style.display = "flex";
                        }
                    }
                } else {
                    console.log('User is not logged in or there was an error.');
                    fetch("header.html")
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error("Network response was not ok");
                            }
                            return response.text();
                        })
                        .then((html) => {
                            document.getElementById("navigation").innerHTML = html;
                            addActiveClassToLink();
                        })
                        .catch((error) => console.error("Error fetching default header:", error));
                }
            },
            error: function (xhr, status, error) {
                console.error("AJAX Error:", status, error);
            }
        });
    }

    addActiveClassToLink()

    loadHeaders();
});
