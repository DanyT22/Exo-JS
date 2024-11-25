let form = document.querySelector("#registrationForm")
let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let confirmpassword = document.querySelector("#confirmPassword")
let button = document.querySelector("button")
let isValid;

username.addEventListener('input', () => {
    if (username.value.length < 5){
        isValid = false;
        username.nextElementSibling.innerText = "Le champs ne contient pas 5 caracteres" 
    } else {
        isValid = true;
        username.nextElementSibling.innerText = ""
    }
})

const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

email.addEventListener('blur', () => {
    if (emailRegexp.test(email.value)){
        isValid = true;
        email.nextElementSibling.innerText = ""
    } else {
        isValid = false;
        email.nextElementSibling.innerText = "L'email n'est pas valide" 
    }
})

const mdpRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
// Le mdp doit contenir au moins: 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial, 8 caracteres

password.addEventListener('input', () => {
    if (mdpRegexp.test(password.value)){
        isValid = true;
        password.nextElementSibling.innerText = ""
    } else {
        isValid = false;
        password.nextElementSibling.innerText = "Le mot de passe n'est pas assez fort" 
    }
})

confirmpassword.addEventListener('input', ()=>{
    if (password.value !== confirmpassword.value){
        isValid = false;
        confirmpassword.nextElementSibling.innerText = "Le mot de passe n'est pas identique" 
    } else {
        isValid = true;
        confirmpassword.nextElementSibling.innerText = ""
    }
})

if(username.value === '' | email.value === '' | password.value === '' | confirmpassword.value === ''){
    isValid = false
}

button.addEventListener('click', (event)=>{
    if (isValid === true){
        alert("Vous avez reussi votre inscription.")
    } else {
        event.preventDefault()
        alert("Il y a un ou plusieur champs incorrrect.")
    }
})