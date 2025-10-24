let mots = [
    "ABANDONNASSENT",
    "ABANDONNASSIEZ",
    "ABANDONNATAIRE",
    "ABASOURDISSAIS",
    "ABASOURDISSANT",
    "ABASOURDISSONS",
    "ABBEVILLIENNES",
]

//Declaration des variables
let afficherClavier = document.getElementById("afficherClavier");
let afficherEmplacementMot = document.getElementById("afficherEmplacementMot");
let zoneDeSaisie = [];
let essie = 0;
let essieMax = 9;
let clavier;

// decortique le mot et zone de saisie
let zoneMot = document.getElementById("mot-cache");
let motCle;
let decortiqueMot;
let motCache
// zone sasisie
let zoneSaisie
let indexSaisie
//fin de variable 
let lettresDuMot = [];
//creation la boucle pour les mots aleatoire
let motAleatoire;

/////////////////////////////////////////////////////////////////////////
// fonction decortique le mot cle
function decortiqueMotCle() {
    let index = Math.floor(Math.random() * mots.length);
    motCle = mots[index];
    decortiqueMot = motCle.split('')
    initMotCache()
}
// je crée un tableau avec autant elements dans le mot caché
function initMotCache() {
    motCache = Array(decortiqueMot.length).fill('_');
    afficherMotCache();
}
// function afficher Emplacement de zone de saisie
function afficherMotCache() {
    if (!zoneMot) return;
    zoneMot.textContent = motCache.join(" ");
    zoneMot.className = " alert alert-danger text-center";
}
// fonction pour creer le clavier 
function clavierAzerty() {
    let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
        "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    let zoneClavier = document.getElementById("afficherClavier");
        
    // Boucle pour créer les bouton
    for (let i = 0; i < alphabets.length; i++) {
        let letter = alphabets[i];
        let button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn-outline-primary m-1";
        button.textContent = letter;
        button.textContent = alphabets[i];
        zoneClavier.appendChild(button);

        button.addEventListener("click", () => {
            button.disabled = true;
            traiterLettre(letter); 
        });

    }
}

function traiterLettre(letter) {
     let trouve = false;
           
    for (let i = 0; i < decortiqueMot.length; i++) {
        if (decortiqueMot[i] === letter) {
            motCache[i] = letter;
            trouve = true;
        }
    }
    afficherMotCache();

    
    if (!motCache.includes("_")) {
        alert("Bravo : " + motCle);
       
    }
   
        if(essie <= essieMax){
        essie++
        console.log(essie)
       
        }
        if(essie == essieMax){
        alert("vous avez depaser le nombre dessais autoriser" + motCle )
       
        }
       
}

function afficherToutesLettres() {
    motCache = decortiqueMot.slice();
    afficherMotCache();

}

// appelle mes fonctions 
clavierAzerty()
decortiqueMotCle()