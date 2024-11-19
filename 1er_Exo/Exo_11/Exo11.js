const dateActu = new Date()

let jour = dateActu.getDate();
let mois = dateActu.getMonth();
let annee = dateActu.getFullYear();
let heure = dateActu.getHours();
let minute = dateActu.getMinutes();

console.log(`On est le ${jour}/${mois}/${annee} a ${heure}:${minute}`);