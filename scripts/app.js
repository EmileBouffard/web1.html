function AfficherFenetre(){
  const conteneurModale  = document.getElementById("conteneur-modale");
  conteneurModale.style.display ="block";
}

function FermerFenetre () {
    const conteneurModale  = document.getElementById("conteneur-modale");
    conteneurModale.style.display ="none";
}

window.addEventListener("load", () =>{
    const conteneurModale  = document.getElementById("conteneur-modale");

    conteneurModale.addEventListener("click", (event) => {
        const estLespaceGrise = event.target.matches("#conteneur-modale");

        if(estLespaceGrise){
        FermerFenetre();
        }
    });
});