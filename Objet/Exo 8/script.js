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

const chiens = new chien()

chiens.parler()