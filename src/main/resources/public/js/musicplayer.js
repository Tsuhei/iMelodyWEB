let prev = document.querySelector('#prev');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let nombre = document.querySelector('#nombre');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let main_img = document.querySelector('#main_img');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artista = document.querySelector('#artista');


let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//  var para la canciones
let track = document.createElement('audio');


// Lista de canciones
let All_song = [
	{
		name: "Candy",
		path: "media/Audio/song1.mp3",
		img: "media/Image/song1.jpg",
		singer: "Plan B"
	},
	{
		name: "You are the right one",
		path: "media/Audio/song2.mp3",
		img: "media/Image/song2.jpg",
		singer: "Sports"
	},
	{
		name: "Estación los Alpes",
		path: "media/Audio/song3.mp3",
		img: "media/Image/song3.jpg",
		singer: "Buhodermia"
	},
    {
		name: "Sudno",
		path: "media/Audio/song4.mp3",
		img: "media/Image/song4.jpg",
		singer: "Molchat Doma"
	},
    {
		name: "¿Que se siente que me gustes tanto?",
		path: "media/Audio/song5.mp3",
		img: "media/Image/song5.jpg",
		singer: "Daniel me estas Matando"
	},
    {
		name: "Dos Gardenias",
		path: "media/Audio/song6.mp3",
		img: "media/Image/song6.jpg",
		singer: "Daniel Canales"
	},
    {
		name: "Paranoid",
		path: "media/Audio/song7.mp3",
		img: "media/Image/song7.jpg",
		singer: "Black Sabbath"
	},
    {
		name: "Acid Liberation",
		path: "media/Audio/song8.mp3",
		img: "media/Image/song8.jpg",
		singer: "AGHORI"
	},
    {
		name: "Fantasy",
		path: "media/Audio/song9.mp3",
		img: "media/Image/song9.jpg",
		singer: "Meiko Nakahara"
	},
    {
		name: "Let's Get Ridiculous",
		path: "media/Audio/song10.mp3",
		img: "media/Image/song10.jpg",
		singer: "Redfoo"
	},
	{
		name: "After Like",
		path: "media/Audio/song11.mp3",
		img: "media/Image/song11.jpg",
		singer: "IVE"
	},
	{
		name: "743",
		path: "media/Audio/song12.mp3",
		img: "media/Image/song12.jpg",
		singer: "Miranda!"
	},
	{
		name: "Hype Boy",
		path: "media/Audio/song13.mp3",
		img: "media/Image/song13&19.jpg",
		singer: "New Jeans"
	},
    {
		name: "Antifragile",
		path: "media/Audio/song14.mp3",
		img: "media/Image/song14.jpg",
		singer: "LE SSERAFIM"
	},
    {
		name: "Por amar al Amor",
		path: "media/Audio/song15.mp3",
		img: "media/Image/song15&20.jpg",
		singer: "Miranda!"
	},
    {
		name: "Banana Brain",
		path: "media/Audio/song16.mp3",
		img: "media/Image/song16.jpg",
		singer: "Die Antwoord"
	},
    {
		name: "Me gustas tanto",
		path: "media/Audio/song17.mp3",
		img: "media/Image/song17.jpg",
		singer: "Miranda!"
	},
    {
		name: "Fearless",
		path: "media/Audio/song18.mp3",
		img: "media/Image/song18.jpg",
		singer: "LE SSERAFIM"
	},
    {
		name: "Attention",
		path: "media/Audio/song19.mp3",
		img: "media/Image/song13&19.jpg",
		singer: "New Jeans"
	},
    {
		name: "Un tiempo",
		path: "media/Audio/song20.mp3",
		img: "media/Image/song15&20.jpg",
		singer: "Miranda!"
	}
];

// Cargamos los datos de la cancion
function load_track(index_no) {
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	nombre.innerHTML = All_song[index_no].name;
	main_img.src = All_song[index_no].img;
	artista.innerHTML = All_song[index_no].singer;
	track.load();

	timer = setInterval(range_slider, 1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


// para mutear
function mute_sound() {
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
function justplay() {
	if (Playing_song == false) {
		playsong();

	} else {
		pausesong();
	}
}


// reinicia la barra de progreso
function reset_slider() {
	slider.value = 0;
}

// play
function playsong() {
	track.play();
	Playing_song = true;
	play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

// pausa
function pausesong() {
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// siguiente
function next_song() {
	if (index_no < All_song.length - 1) {
		index_no += 1;
		load_track(index_no);
		playsong();
	} else {
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// anterior
function prev_song() {
	if (index_no > 0) {
		index_no -= 1;
		load_track(index_no);
		playsong();

	} else {
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// volumen cambio
function volume_change() {
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// modifica el volumen al dar click en x parte
function change_duration() {
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// auto reproducir
function autoplay_switch() {
	if (autoplay == 1) {
		autoplay = 0;
		auto_play.style.background = "#6626d58a";
	} else {
		autoplay = 1;
		auto_play.style.background = "rgba(140,82,255,255)";
	}
}


function range_slider() {
	let position = 0;

	// actualiza la posicion del slider
	if (!isNaN(track.duration)) {
		position = track.currentTime * (100 / track.duration);
		slider.value = position;
	}


	// esta funcion corre si esta el auto reproducir activado
	if (track.ended) {
		play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
		if (autoplay == 1) {
			index_no += 1;
			load_track(index_no);
			playsong();
		}
	}
}