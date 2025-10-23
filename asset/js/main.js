

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
let button;
let clavier;
let motCle;
let decortiqueMot;
//fin de variable 

//creation la boucle pour les mots aleatoire
let motAleatoire;

 mots.forEach(() => {
   motAleatoire = Math.floor(Math.random() * Math.floor (10));
   
});
let  index = Math.floor(Math.random() * mots.length);

function decortiqueMotCle(){
    motCle = mots[index];
    decortiqueMot = motCle.split()

    console.log(decortiqueMot)
}

// function afficher Emplacement de mot 
function afficherEmplacementMotCle(){
    
}

// fonction pour creer le clavier 
function clavierAzerty(){
    button = document.createElement("button");
    
     let lettreClavier = [] ;
    
    let alphabets = ["A","B","C","D","E","F","G","H","I","J","K",
        "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
       
       for(let i = 0; i < alphabets.length ; i++){

           lettreClavier.push = alphabets[i];  
       }
      //afficherClavier.innerHTML = `<button>${clavier}</button>`

}
// appelle mes fonctions 
clavierAzerty()
afficherEmplacementMotCle()
decortiqueMotCle()