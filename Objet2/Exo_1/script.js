import { personne } from "./personne.js";

let nom = prompt("Quel est votre Nom")
let prenom = prompt("Quel est votre prenom")

let nomComplet = new personne(nom, prenom)

nomComplet.afficher()