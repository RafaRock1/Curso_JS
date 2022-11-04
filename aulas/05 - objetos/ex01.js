function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, desconto) {
    return (valor + (valor * (desconto / 100)));
}

function tipoDePagamento(tipo) {
    if (tipo === 1) {
        console.log('Tipo de pagamneto: Débito');
        console.log('Com essa forma de pagamento o produto terá 10% de desconto custando R$:' + aplicarDesconto(preço, 10));
    
    } else if (tipo === 2) {
        console.log('Tipo de pagamneto: PIX');
        console.log('Com essa forma de pagamento o produto terá 15% de desconto custando R$:' + aplicarDesconto(preço, 15));
    
    } else if (tipo === 3) {
        console.log('Tipo de pagamneto: Cartão 2x');
        console.log('Com essa forma de pagamento você pagara o valor normal de etiqueta R$:' + aplicarDesconto(preço, 0));
    
    } else if(tipo === 4){
        console.log('Tipo de pagamneto: Cartão 3x ou +');
        console.log('Com essa forma de pagamento o produto terá um juros de 10% custando R$:' + aplicarJuros(preço, 10));
    }else{
        console.log('Tipo de pagamneto: OPÇÃO INVALIDA');
    }
}

const preço = 220;
tipoDePagamento(4);
/*
    tipoDePagamento:
    DÉBITO         - 10% DESC   = 1
    PIX            - 15% DESC   = 2
    CARTÃO 2X      - 0% DESC    = 3
    CARTÃO + DE 2X - 10% JUROS  = 4
*/