class Dado{

    constructor(faces){
        this.faces = 0;
    }
    
    Rolar(){
        console.log(`Resultado do dado foi: ${this.GetRandomIntInclusive(1, this.faces)}`);
        
    }

    GetRandomIntInclusive(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

let d20 = new Dado(20)

d20.Rolar