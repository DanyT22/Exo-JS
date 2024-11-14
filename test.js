// function random(min, max){
//     return Math.round(Math.random() * (max - min) + min)
// }

// let nombreCoup

// for(valeur = random(100,999); valeur !== 222; valeur = random (100, 999)){
//     nombreCoup++;
// }

// console.log(`Voici le nombre de coup : ${nombreCoup} pour que ${valeur} soit egal a 222`);


// Exo 11

const dateActu = new Date()

let jour = dateActu.getDate();
let mois = dateActu.getMonth();
let annee = dateActu.getFullYear();
let heure = dateActu.getHours();
let minute = dateActu.getMinutes();

console.log(`On est le ${jour}/${mois}/${annee} a ${heure} : ${minute}`);
