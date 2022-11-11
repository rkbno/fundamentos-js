// fuction declaration
function somar(a, b) {
    console.log( 'arguments ->', arguments);
    return a + b;
}

// function expression

var somar = function(a, b) {
    return a - b;
}

// java
// int somar(int a, int b) {
//    return a + b;
//}
var soma = somar (2, 3);
console.log('2 + 3 =', soma);

var subtraindo = subtrair(6, 2);
console.log('6 - 2 =', subtraindo);


console.log('typeof subtrair', typeof subtrair);