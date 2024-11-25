function compterProprietes(objet){
    let nombreObjet = 0;
    for (let cles in objet){
        nombreObjet ++
    }
    return nombreObjet
}

let x ={
    nom : "a",
    prenom : "b",
    age : 1,
}

console.log(compterProprietes(x));