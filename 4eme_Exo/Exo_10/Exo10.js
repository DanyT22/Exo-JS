function estTrie(tableau){
    let valeurPrecedente = tableau [0]
    for (i = 1; i < tableau.length; i++){
        if (valeurPrecedente > tableau[i]){
            return false
        } else {
            valeurPrecedente = tableau[i]
        }
    }
    return true
}

let x = [1,2,3,2]

console.log(estTrie(x));