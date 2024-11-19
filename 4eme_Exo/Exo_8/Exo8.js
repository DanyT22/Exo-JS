function extraireNoms(produits){
    let noms = [];
    for (let cles in produits){
            noms.push(produits[cles].nom)
    }
    return noms
}

let produits = [
    {nom: "Stylo", prix: 2 },
    {nom: "Cahier", prix: 5},
    {nom: "Gomme", prix: 1}
]

console.log(extraireNoms(produits));