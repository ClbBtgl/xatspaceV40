$(document).ready(function() {

    var playing = false,
        artistname = $(".artist-name"),
        musicName = $(".music-name"),
        time = $(".time"),
        fillBar = $(".fillBar");

    let audioData = [];

    var song = new Audio();
    var CurrentSong = 0;
    window.onload = load();

    function load() {
        audioData = [{
                name: "ROVT",
                artist: "Made to be broken",
                src: "assets/rovt.mp3?raw=true"
            },
            {
                name: "Mary on a cross",
                artist: "Ghost",
                src: "assets/MaryOnACross.mp3?raw=true"
            },
            {
                name: "Downfall",
                artist: "Trust Company",
                src: "assets/downfall.mp3?raw=true"
            },
        ];

        artistname.html(audioData[CurrentSong].artist);
        musicName.html(audioData[CurrentSong].name);
        song.src = audioData[CurrentSong].src;
    }

    $("#play").click(function playOrPause() {
        if (song.paused) {
            song.play();
            playing = true;
            $("#play").removeClass("fa-play");
            $("#play").addClass("fa-pause");
        } else {
            song.pause();
            playing = false;
            $("#play").addClass("fa-play");
            $("#play").removeClass("fa-pause");
        }
    });

    $("#prev").click(function prev() {
        CurrentSong--;
        if (CurrentSong < 0) {
            CurrentSong = 2;
        }
        playSong();
    });

    $("#next").click(function next() {
        CurrentSong++;
        if (CurrentSong > 2) {
            CurrentSong = 0;
        }
        playSong();
    });


    function playSong() {
        var curSong = audioData[CurrentSong];
        artistname.html(curSong.artist);
        musicName.html(curSong.name);
        song.src = curSong.src;
        song.play();
        $("#play").addClass("fa-pause");
        $("#play").removeClass("fa-play");
        $("img").addClass("active");
        $(".player-track").addClass("active");
    }
});