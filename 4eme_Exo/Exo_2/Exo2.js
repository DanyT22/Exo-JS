function sommeTableau (tableau){
    let somme = 0
    for (i=0; i < tableau.length; i++){
        somme += tableau[i]
    } 
    return somme
}

let x = [1,2,3,4,5,6]

console.log(sommeTableau(x));
