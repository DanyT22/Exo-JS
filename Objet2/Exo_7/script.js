import { cercles } from "./cercle.js";
import { figure } from "./figure.js";

let rayon = prompt("Veuillez entrer un rayon")

let cercle = new cercles(rayon)

cercle.calculerPerimetre()
cercle.calculerSurface()

alert(`Le cercle de rayon ${rayon}cm a une surface de ${cercle.surface}cm² et un périmètre de ${cercle.perimetre}cm`)