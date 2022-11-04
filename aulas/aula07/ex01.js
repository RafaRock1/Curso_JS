class car {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calculoViajem(distanciaKm, preçoG) {
        return distanciaKm * this.gastoMedioPorKm * preçoG; 
    }
    
}

const uno = new car('Fiat', 'Prata', 1/12), palio = new car('Fiat', 'Preto', 1/10);

console.log(uno);
console.log(uno.calculoViajem(70, 5).toFixed(2));
console.log(palio.calculoViajem(70, 5).toFixed(2));