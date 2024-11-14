// Ex 1

const nom = "Martin";

const anneeNaissance = "2000";

const age = 2024 - anneeNaissance;

console.log(`Bonjour Mr ${nom} vous avez ${age} ans`);



// Ex 2

const note_math = 15;
const note_francais = 12;
const note_HG = 9;
const moyenne = (note_math + note_francais + note_HG)/3

console.log(`La moyenne est de ${moyenne}/20`);



// Ex 3

let sexe = "Homme";

if (sexe = "Homme"){
    console.log("Bonjour Monsieux");
} else if (sexe = "Femme"){
    console.log("Bonjour Madame");
} else {
    console.log("Veuillez remplir correctement le champs précédent");
    
}



// Ex 4

let Heure = 15;

if (Heure < 12){
    console.log("On est le matin");
} else  if (Heure < 20){
    console.log("On est l'apès-midi");
} else {
    console.log("On est le soir");
    
}



// Ex 5

let choix = 2 

if (choix === 1){
    console.log("Insérer");
} else if (choix === 2){
    console.log("Supprimer");
} else if (choix === 3){
    console.log("Afficher");
} else if (choix === 4){
    console.log("Ce choix n'existe pas");
}



// Ex 6

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



// Ex 7

for (i = 44000; i < 45000; i++) {
    console.log(i);
}



// Ex 8

for (i = 0; i < 20 ; i+=2){
    if (i === 10){
        console.log(`
            ${i}
            `);
        
    } else {
        console.log(i);
    }
}



// Ex 9

function random(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

let x = [];

for (i = random(1,9); x.length < 3; i = random(1, 9)) {
    if (i % 2 === 0 && x.length === 0 ){
        x.push (i)
    } else if (i % 2 !== 0 && x.length ===1){
        x.push(i)
    } else if (i % 2 !== 0 && x.length ===2){
        x.push(i)
    }
}

console.log(x);



// Ex 10

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

let nombreCoupFor

for(valeur = random(100,999); valeur !== 222; valeur = random (100, 999)){
    nombreCoup++;
}

console.log(`Voici le nombre de coup : ${nombreCoupFor} pour que ${valeur} soit egal a 222`);


// Ex 11

const dateActu = new Date()

let jour = dateActu.getDate();
let mois = dateActu.getMonth();
let annee = dateActu.getFullYear();
let heure = dateActu.getHours();
let minute = dateActu.getMinutes();

console.log(`On est le ${jour}/${mois}/${annee} a ${heure} : ${minute}`);