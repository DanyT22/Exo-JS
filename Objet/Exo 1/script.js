class voiture{
    constructor(marque, modele){
        this.marque = marque;
        this.modele = modele;
    }
    afficherDetails(){
        console.log(`La marque de la voiture est ${this.marque} et c'est le modele ${this.modele}`);
    }
}

let voitures = new voiture("Tesla", "Model S");

voitures.afficherDetails()