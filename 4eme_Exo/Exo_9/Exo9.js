function factorielle(n){
    for (i = n-1; i > 0; i--){
        n *= i
    }
    return n
}

let x = 5

console.log(factorielle(x));
