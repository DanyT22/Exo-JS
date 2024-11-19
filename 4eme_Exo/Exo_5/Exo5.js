function compterVoyelles(chaine){
    let nombreVoyelle = 0;
    let voyelle = ["a", "e", "i", "o", "u", "y"]
    let lettre
    for (i = 0; i < chaine.length; i++){
        lettre = chaine[i]
        if (voyelle.includes(lettre.toLowerCase())){
            nombreVoyelle++
        }
    }
    return nombreVoyelle
}

let x = "Azerty"

console.log(compterVoyelles(x));
