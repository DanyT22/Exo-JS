export class rectangles{
    constructor(longueurs, largeurs){
        this.longueurs = Number(longueurs)
        this.largeurs = Number(largeurs)
    }

    calculerAir(){
        this.air = this.longueurs * this.largeurs
        console.log(`L'air du rectangle qui a pour largeur ${this.largeurs} et pour longeur ${this.longueurs} est de ${this.air}`);
        return this.air
    }

    calculerPerimetre(){
        this.perimetre = (this.longueurs + this.largeurs) * 2
        console.log(`Le perimetre du rectangle qui a pour largeur ${this.largeurs} et pour longeur ${this.longueurs} est de ${this.perimetre}`);
        return this.perimetre
    }
}