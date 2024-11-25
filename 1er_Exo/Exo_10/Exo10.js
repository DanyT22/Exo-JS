// Avec while

function random(min, max){
        return Math.round(Math.random() * (max - min) + min)
    }

let valeur = random (100, 999);
let nombreCoup = 0;

while (valeur !== 222){
    nombreCoup++;
    valeur = random(100, 999);
}

console.log(`Voici le nombre de coup : ${nombreCoup} pour que ${valeur} soit egal a 222`);

// Avec for

function random(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

let nombreCoupFor = 0;

for(valeur = random(100,999); valeur !== 222; valeur = random (100, 999)){
    nombreCoupFor++;
}

console.log(`Voici le nombre de coup : ${nombreCoupFor} pour que ${valeur} soit egal a 222`);