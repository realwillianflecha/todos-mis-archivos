
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function() {
        console.log('pausando...')
    },
    borrar: function(id) {
        console.log(`Borrando cancion... ${id}`);
    },
    playList: function(nombre) {
        console.log(`Creando nueva playlist con el nombre: `)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.playList('Bachata');
reproductor.playList('Danhita mi niña hermosa💕🥹');
reproductor.reproducirPlaylist('Bachata');