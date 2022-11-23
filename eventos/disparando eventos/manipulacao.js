$(function() {
	var atividade = $('#atividade');
	var listaAtividades = $('#lista-atividades');

	atividade.on('keyup', function(e) {
		var keyCode = e.keyCode;

		if (keyCode === 13) {
			atividade.trigger('enter', atividade.val());
			atividade.val('');
		}
	});

	atividade.on('enter', function(evento, texto) {
		listaAtividades.prepend('<li>' + texto + '</li>');
	});

	atividade.on('enter', function(evento, texto) {
		console.log('Outra funcionalidade aqui...');
	});

});