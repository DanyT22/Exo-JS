function multiple (valeur){
    if (valeur % 3 !== 0){
        console.log("Ce n'est pas un multiple de 3");
    } else if (valeur % 5 !== 0){
        console.log("Ce n'est pas un multiple de 5");
    } else {
        console.log("C'est un multiple de 3 et 5");
    }
}

multiple (15)