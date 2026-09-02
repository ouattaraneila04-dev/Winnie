function ouvrirLettre() {

    var lettre = document.getElementById("lettre");

    var bouton = document.querySelector("button");


    if (lettre.style.display === "none" || lettre.style.display === "") {

        lettre.style.display = "block";

        bouton.innerHTML = "💗 Refermer la lettre";

        lettre.scrollIntoView({
            behavior: "smooth"
        });

    } else {

        lettre.style.display = "none";

        bouton.innerHTML = "💌 Ouvrir la lettre";

    }

}
