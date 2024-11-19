function extraireSousTableau(tableau, debut, fin){
    return tableau.slice(debut, fin)
}

let x = [1,2,3,4,5,6]

console.log(extraireSousTableau(x, 2, 5));
