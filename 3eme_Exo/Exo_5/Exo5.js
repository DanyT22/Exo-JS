function filtrerNombres (tableau, valeur){
    return tableau.filter((i) => i > valeur )
}

let x = [1,2,3,4,5,6]

console.log(filtrerNombres(x, 3));
