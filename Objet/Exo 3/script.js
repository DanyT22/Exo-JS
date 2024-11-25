class voiture{
    constructor(marque, modele){
        this.marque = marque
        this.modele = modele
    }

    demarrer(){
        console.log(`La voiture ${this.marque} ${this.modèle} démarre`);
    }
}

let voiture1 = new voiture("Tesla", "Modele S")

voiture1.demarrer()



// function voiture (marque, modèle){
//     this.marque = marque
//     this.modèle = modèle
// }

// voiture.prototype.demarrer = function() {
//     console.log(`La voiture ${this.marque} ${this.modèle} demarre`);
    
// }

// let voiture1 = new voiture("Tesla", "Modele S")

// voiture1.demarrer()