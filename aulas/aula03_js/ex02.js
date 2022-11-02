const peso = 69, altura = 1.65, imc = peso / Math.pow(altura, 2); // Math.pow é uma biblioteca que estou usando para elevar a constante altura ao quadrado.

console.log(imc.toFixed(1))

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if(imc >= 30 && imc < 40){
    console.log('Obeso');
}else{
    console.log('Obesidade Grave');
}