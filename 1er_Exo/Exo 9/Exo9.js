function random(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

let x = [];

for (i = random(1,9); x.length < 3; i = random(1, 9)) {
    if (i % 2 === 0 && x.length === 0 ){
        x.push (i)
    } else if (i % 2 !== 0 && x.length >=1){
        x.push (i)
    }
}

console.log(x);
