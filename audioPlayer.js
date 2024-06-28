$(function () {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();

    const audioElement = $('#audio');
    // Creating a source for audio element Ex. <audio src="">
    const track = AudioContext.createMediaElementSource(audioElement);
    console.log()
    track.connect(AudioContext.destination);
    $('.play').on('click', e => {
        e.preventDefault();
        if (AudioContext.state === 'suspended') {
            AudioContext.resume();
        }
        if ($('.play').dataset.playing === 'false') {
            audioElement.play();
        }
    })

});