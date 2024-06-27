$(() => {
    $('audio').removeAttr('controls');
    $('.controls-wrapper').css('visibility', 'visible');
    $('.fa-play').on('click', () => {
        console.log('hello')
    })

    const tooltip =  $('output[for="volume-slider"]');

    $('#volume-slider').on('input', function() {
       
        const val = $(this).val();
        console.log(val)
        tooltip.text(val);
       
        // Calculate the position of the tooltip
        const trans = "-" + val + "%";
        const width = $(this).outerWidth();
        tooltip.css({
            left: val + "%",
            transform: `translate(${trans})`
            });
    });
})