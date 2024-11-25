import { rectangles } from "./rectangle.js";

let longueur = prompt(`Veuillez entrer une longueur`)
let largeur = prompt(`Veuillez entrer une largeur`)

let rectangle = new rectangles(longueur, largeur)

rectangle.calculerAir()
rectangle.calculerPerimetre()

alert(`Le rectangle de longueur ${rectangle.longueurs}cm et de largeur ${rectangle.largeurs}cm a une surface de ${rectangle.air}cm² et un périmètre de ${rectangle.perimetre}cm`)