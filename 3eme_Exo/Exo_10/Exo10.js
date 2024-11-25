function remplaceMot(phrase, ancienMot, nouveauMot){
    return phrase.replace(ancienMot, nouveauMot)
}

let x = "Voici une chaine de mots"

console.log(remplaceMot(x, "mots", "caractère"));