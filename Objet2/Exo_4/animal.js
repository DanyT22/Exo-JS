export class animal{
    constructor (noms, especes){
        this.noms = noms
        this.especes = especes
    }

    afficher(){
        console.log(`L'animal s'appelle ${this.noms} et est de l'espèce ${this.especes}`);
    }
}