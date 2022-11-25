const nota = [];
let soma = 0;

nota.push(7);
nota.push(6);
nota.push(8);

for (let i = 0; i < nota.length; i++) {
    soma += nota[i];
    console.log(`${i+1}º Nota: ${nota[i].toFixed(1)}`);
}

const media = soma / nota.length;
console.log("\n- Media: " + media.toFixed(1));