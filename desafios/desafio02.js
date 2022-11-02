const pEtanol = 3.37, pGasolina = 5.21, kmPorL = 10, tipo = 'gasolina', distanciaKm = 100;
const lGastos = distanciaKm / kmPorL;
let pagar;

if (tipo === 'etanol') {
    pagar = lGastos * pEtanol;
    console.log('Para essa viajem com etanol, você vai precissar pagar R$;', pagar.toFixed(2));
} else if (tipo === 'gasolina') {
    pagar = lGastos * pGasolina;
    console.log('Para essa viajem com gasolina, você vai precissar pagar R$;', pagar.toFixed(2));
} else {
    console.log('Tipo de combustivel não identificado.');
}