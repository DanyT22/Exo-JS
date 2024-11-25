import { figure } from "./figure.js";

export class cercles extends figure{
    constructor(rayons){
        super()
        this.rayons = Number(rayons)
    }

    calculerPerimetre(){
        this.perimetre = (this.rayons * 2) * Math.PI
        return this.perimetre
    }

    calculerSurface(){
        this.surface = Math.PI * (this.rayons * this.rayons)
        return this.surface
    }
}