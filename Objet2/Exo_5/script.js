import {personne} from "./personne.js"
import {animal} from "./animal.js"
import {vehicule} from "./vehicule.js"
import {maison} from "./maison.js"

let moi = new personne ("Thibault", "Dany")
let monChien = new animal ("Julia", "Chien")
let voiture = new vehicule ("Nike", "Air Jordan", "1")
let domicile = new maison ("1", "rue", `du paradis`, "18999", `Las Angelos`)

moi.afficher()
monChien.afficher()
voiture.afficher()
domicile.afficher()