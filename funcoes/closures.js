
var incrimentar = (function() {
    var valor = 0;

    return function() {
        return++valor;
    }
})();

var fn = incrimentar();

console.log(incrimentar());
console.log(incrimentar());
console.log(incrimentar());