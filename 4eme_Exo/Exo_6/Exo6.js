function nombresPaires(tableau){
    let paire = [];
    let nombre;
    for (i=0; i < tableau.length; i++){
        nombre = tableau[i]
        if (nombre % 2 === 0)
            paire.push(nombre)
    }
    return paire
}

let x = [1,2,3,4,5,6]

console.log(nombresPaires(x));