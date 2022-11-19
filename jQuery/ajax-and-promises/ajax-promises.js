$(function() {
   

    var resposta = $.ajax({
    url:'http://localhost:8080/estados',		
    method:'GET',
    dataType:'jsonp'

});
resposta.done(function(estados){
    var comboEstado = $('#combo-estado');
    estados.forEach(function(estado) {
        var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
        comboEstado.append(optionEstado);
        
    });
    
}); 
resposta.fail(function(){
alert('Erro ao carregar dados do servidor!');
});
}); 