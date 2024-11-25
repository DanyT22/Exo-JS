export function personne (noms, prenoms){
        this.noms = noms
        this.prenoms = prenoms
    }

personne.prototype.afficher = function() {
    console.log(`Votre nom est ${this.noms} et votre prenom ${this.prenoms}`);
}