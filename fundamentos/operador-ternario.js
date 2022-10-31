var temFoto = false;
// se tem foto: perfil.jpg
// se nao tem foto: nock-perfil.jpg
// <img src="patchFoto">

/*
var patchFoto = '';
if (temFoto) {
    patchFoto = 'maria-perfil.jpg';
}   else {
    patchFoto = 'nock-perfil.jpg';
}
*/

var pathFoto = temFoto ? 'maria-perfil.jpg' : 'mock-perfil.jpg';

console.log('path da foto', pathFoto);

