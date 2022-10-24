var percetualImposto = 0.15;
var valor = 100;
var totalImposto = valor * percetualImposto;

console.log('Total imposto a pagar', totalImposto);

//HOISTING

var percentualImposto, valor, totalImposto;
percetualImposto = 0.15;
valor = 100;
totalImposto = valor = percentualImposto;

console.log('Total imposto a pagar', totalImposto);
