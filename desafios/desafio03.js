// Criar um programa que dado um número imprima a sua tabuada e imprima cada número par encontrado.
const receber = require('prompt-sync')({sigint: true});
const multiplicador = 10;
var numero = receber("Apresentar tabuada do: ");
let tabuada;
console.log("\n");
for (let i = 1; i <= multiplicador; i++) {
    tabuada = numero * i;
    console.log(numero + " x " + i + "\t= " + tabuada);
}
console.log("\n--- Números Pares ---\n")
for (let i = 0; i < multiplicador; i++) {
    tabuada = numero * i;
    if (tabuada % 2 === 0) {
        console.log(numero + " x " + i + "\t= " + tabuada);
    }
    
}