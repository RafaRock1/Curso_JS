const notas = [];
let soma = 0;

notas.push(5);
notas.push(8);
notas.push(8);

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
}

const media = soma / notas.length;

console.log('\nNº de provas: ' + notas.length + '\nSoma das notas: ' + soma + '\nMédia: ' + media.toFixed(1));