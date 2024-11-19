function ajouterPropriete(objet, cle, valeur){
    objet[cle] = valeur;
    return objet;
}

let x = {
    prenom: "Dany",
    nom: "Thibault",
}

console.log(ajouterPropriete (x, "age", 23));
