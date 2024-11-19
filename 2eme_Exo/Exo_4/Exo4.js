let x = prompt("Veuillez entre un 1er chiffre")
let y = prompt("Veuillez entre un 2nd chiffre")

let paragraphe = document.getElementById("p1")

if (x > y){
    paragraphe.innerHTML = "La 1er valeur est plus grande que la 2nd"
} else {
    paragraphe.innerHTML = "La 2nd valeur est plus grande que la 1er"
}