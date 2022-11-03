class pessoa {
    nome;
    idade;
    peso;
    altura;
    nascimento;

    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.nascimento = 2022 - idade;
        this.peso = peso;
        this.altura = altura;
    }

    descrever() {
        console.log(`\nMeu nome é ${this.nome}, tenho ${this.idade} anos, peso ${this.peso}km e tenho ${this.altura.toFixed(2)} de altura.`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const rafa = new pessoa('Rafael C Rocha',21,85,1.8);
const caio = new pessoa('Caio Daniel',16,54,1.74);

compararPessoas(rafa,caio);
