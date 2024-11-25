export class vehicule{
    constructor(marques, modeles, nombrePlaces){
        this.marques = marques
        this.modeles = modeles
        this.nombrePlaces = nombrePlaces
    }

    afficher(){
        console.log(`Le véhicule est de la marque ${this.marques} et du modèle ${this.modeles}. Il peut transporter ${this.nombrePlaces} personnes`);
    }
}