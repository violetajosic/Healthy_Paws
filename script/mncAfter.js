function mncAfter() {
    alert("PHP code executed successfully!");
    document.querySelector(".row-12.catalogExitRow").style.display="none";
    document.querySelector("form.row-12.mb-2.catalogInfoRow.mncInfoRow").style.display="none";
    document.querySelector(".row-12.profileButton.catalogBtn").style.display="none";
    
    var newH3 = document.createElement('h3');
    newH3.textContent = "You have successfully created a catalog";
    var targetElement = document.querySelector('.help-secondWrapper.profileWrapper.mncWrapper');
    targetElement.appendChild(newH3);

    var newH2 = document.createElement('h2');
    newH2.textContent = "This is your catalog ID:";
    newH3.appendChild(newH2);
    
//prikazivanje broja kataloga iz mnc baze
    var newH2CatalogId = document.createElement('h2');
    newH2CatalogId.textContent = catalogId;
    document.body.appendChild(newH2CatalogId);
}
