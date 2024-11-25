class animal{
    constructor(nom){
        this.nom = nom
    }

    parler(){
        console.log();
    }
}

class chien extends animal{
    constructor(){
        super("chien")
    }

    parler(){
        console.log(`Ce ${this.nom} aboie`);
    }
}

class chat extends animal{
    constructor(){
        super("chat")
    }

    parler(){
        console.log(`Ce ${this.nom} miaule`);
    }
}

const zoo = [new chien(), new chat ()]

zoo.forEach(animal => animal.parler())