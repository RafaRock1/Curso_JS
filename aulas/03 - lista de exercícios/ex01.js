const n1 = 5, n2 = 5, n3 = 4, media = (n1 + n2 + n3) / 3;

console.log(media.toFixed(1));

if (media >= 0 && media < 5) {
    console.log('Aluno reprovado.');
} else if (media >= 5 && media < 7) {
    console.log('Aluno de recuperação.');
} else if (media <= 10) {
    console.log('Aluno Aprovado.');
} else {
    console.log('Erro! A nota precisa ser entre 0 e 10.');
}