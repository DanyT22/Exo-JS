export class personne{
    constructor(noms, prenoms){
        this.noms = noms
        this.prenoms = prenoms
    }

    afficher(){
        console.log(`La personne s'appelle ${this.prenoms} ${this.noms}`);
    }
}