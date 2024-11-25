class voiture{
    constructor(marque, modele){
        this.marque = marque
        this.modele = modele
    }
}

class camion extends voiture{
    constructor (marque, modele, poidsMax){
        super(marque, modele)
        this.poidsMax = poidsMax
    }
}

let camion1 = new camion("audi", "s", "2kg")

console.log(camion1);



// function voiture (marque, modèle){
//     this.marque = marque
//     this.modèle = modèle
// }

// function camion (poidsMax){
//     voiture.call(this, "camion");
//     this.poidsMax = poidsMax;
// }

// let camion1 = new camion("2kg" )

// console.log(camion1.poidsMax);
