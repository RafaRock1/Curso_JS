const preço = 220;
let desconto, tipoPagamento = 5;
/*
    tPagamento:
    DÉBITO          = 1
    PIX             = 2
    CARTÃO 2X       = 3
    CARTÃO + DE 2X  = 4
*/

console.log('Produto custa R$:',preço.toFixed(2));

if (tipoPagamento === 1) {
    desconto = preço * 0.90;
    console.log('Tipo de pagamneto: Débito');
    console.log('Com essa forma de pagamento o produto terá 10% de desconto custando R$:',desconto.toFixed(2));

} else if (tipoPagamento === 2) {
    desconto = preço * 0.85;
    console.log('Tipo de pagamneto: PIX');
    console.log('Com essa forma de pagamento o produto terá 15% de desconto custando R$:',desconto.toFixed(2));

} else if (tipoPagamento === 3) {
    desconto = preço;
    console.log('Tipo de pagamneto: Cartão 2x');
    console.log('Com essa forma de pagamento você pagara o valor normal de etiqueta R$:',desconto.toFixed(2));

} else if(tipoPagamento === 4){
    desconto = preço * 1.1;
    console.log('Tipo de pagamneto: Cartão 3x ou +');
    console.log('Com essa forma de pagamento o produto terá um juros de 10% custando R$:',desconto.toFixed(2));
}else{
    console.log('Tipo de pagamneto: OPÇÃO INVALIDA');
}