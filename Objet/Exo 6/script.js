class voiture{
    constructor(marque, modele){
        this.marque = marque
        this.modele = modele
    }

    afficherDetails(){
        console.log(`La marque de la voiture est ${this.marque} et c'est le modele ${this.modele}`);
    }
}

class camion extends voiture{
    constructor (marque, modele, poidsMax){
        super(marque, modele)
        this.poidsMax = poidsMax
    }
    afficherDetails(){
        console.log(`La marque de la voiture est ${this.marque} et c'est le modele ${this.modele} et son poid max est de ${this.poidsMax}`);
    }
}

let camion1 = new camion("audi", "s", "2kg")

camion1.afficherDetails()