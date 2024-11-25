function inverserChaine(chaine){
    let reverse = []
    for (i = chaine.length - 1; i >= 0; i--){
        reverse.push(chaine[i])
    }
    return reverse
}

let x =[1,2,3,4,5]

console.log(inverserChaine(x));