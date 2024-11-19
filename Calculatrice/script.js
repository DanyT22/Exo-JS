// let zero = document.querySelector(".zero")
// let un = document.querySelector(".un")
// let deux = document.querySelector(".deux")
// let trois = document.querySelector(".trois")
// let quatre = document.querySelector(".quatre")
// let cinq = document.querySelector(".cinq")
// let six = document.querySelector(".six")
// let sept = document.querySelector(".sept")
// let huit = document.querySelector(".huit")
// let neuf = document.querySelector(".neuf")
// let plus = document.querySelector(".plus")
// let moins = document.querySelector(".moins")
// let diviser = document.querySelector(".diviser")
// let multiplier = document.querySelector(".multiplier")
// let effacer = document.querySelector(".effacer")
// let egal = document.querySelector(".egal")

let button = document.querySelectorAll("button")
let ecran = document.querySelector('p')

for (let valeur of button){
    if (valeur.innerText === "="){
        valeur.addEventListener('click', function() {
            try{
            ecran.innerText = eval(ecran.innerText)
        } catch(e){
            alert("Ce calcul ne peux pas etre effectuer du a une erreur de syntaxe.")
        }})
    } else if (valeur.innerText === "C"){
        valeur.addEventListener('click', function() {ecran.innerText = ""});
    } else {
        valeur.addEventListener('click', function() {ecran.innerText += valeur.innerText});
    }
}

let key;

window.addEventListener('keyup', function(event) {key = event.key;

if (key === "Enter" | key === "="){
    try{
        ecran.innerText = eval(ecran.innerText)
    } catch(e){
        alert("Ce calcul ne peut pas être effectuer du a une erreur de syntaxe.")
    }
} else if (key === "Backspace"){
    ecran.innerText = ""
} else if ("0123456789/*-+".includes(key) ){
    ecran.innerText += key
}
}
)
