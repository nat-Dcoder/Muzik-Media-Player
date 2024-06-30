$(async () => {
    $('.control-menu').css('display', 'none')
    $('.range-control').css('display', '');
    $('audio').removeAttr('controls');
    $('.controls-wrapper').css('visibility', 'visible');
    $('.fa-ellipsis-v').on('click', () => {
        $('.control-menu').css('right', 0)
        $('.control-menu').slideToggle();
    })
    $('.fa.fa-heart').on('click', () => {
        $('.fa.fa-heart').css('color', 'red')
    })

    $(`
        .main-content, 
        .header, 
        .fa-bell, 
        .fa-heart,
        .fa-volume,
        button,
        .main-controls,
        .progress,
        .spacer
        
    `).on('click', () => {
        $('.control-menu').hide();
    })

    $('.v-icon').on('click', () => {
        $('.range-container').toggle();
    })

    
    //========== Volume slider ================
    const volumeIcon = $('.range-control i');
    const volumeValue = Number($('#volume-slider').val());

    const tooltip = $('output[for="volume-slider"]');
    tooltip.text($('#volume-slider').val());  
    volumeIcon.on('click', () => {
        volumeIcon.toggleClass();
        volumeIcon.addClass('fa fa-volume-xmark')
    })
    $('#volume-slider').on('input', function () {
        const val = $(this).val();
        
        tooltip.text(val);
        // Calculate the position of the tooltip
        const trans = "-" + val + "%";
        const width = $(this).outerWidth();
        if (val > 60) {
            volumeIcon.toggleClass();
            volumeIcon.addClass('fa fa-volume-high')
        }
        else if (val > 1 || val < 35 ) {
            volumeIcon.removeClass('fa fa-volume-high');
            volumeIcon.addClass('fa fa-volume-down');
        }
        else if (val < 1) {
            volumeIcon.removeClass('fa fa-volume-low');
            volumeIcon.addClass('fa fa-volume-xmark')
        };

        $('v-icon').on('click', () => {
            $('.range-control').slideToggle()
        })
        
    });

    $('.fa.fa-volume-high').on('click', () => {
        $('.range-control').show()
    })
    
    //========= Volume slider end ============
    
   
    _getTracks()
    UIControl()
});