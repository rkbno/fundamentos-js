var nomes = ['Joao', 'Pedro', 'Maria', 'Jose'];

for (var i = 0; i < nomes.length; i++) {
    console.log('nomes[', i, ']=', nomes[i]);
}

// mais simples

nomes.forEach(function(e){
    console.log(e);
});