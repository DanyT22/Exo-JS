class voiture{
    constructor(marque, modele){
        this.marque = marque
        this.modele = modele
    }

    demarrer(){
        console.log(`La voiture ${this.marque} ${this.modèle} demarre`);
    }
}

class camion extends voiture{
    constructor (marque, modele, poidsMax){
        super(marque, modele)
        this.poidsMax = poidsMax
    }
    demarrer(){
        console.log(`Le camion ${this.marque} ${this.modele} démarre`);
    }
}

let camion1 = new camion("audi", "s", "2kg")

camion1.demarrer()