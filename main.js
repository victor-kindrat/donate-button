$('.popup__mask').fadeOut(0);
let closePopup = () => {
    $('.popup__mask').fadeOut(300);
    $('.popup').css({
        'animation': 'open 0.6s 1 cubic-bezier(0,.72,.41,.99) reverse'
    })
    setTimeout(function () {
        $('.popup').css({
            'animation': 'unset',
            'display': 'none'
        })
    },600);
    return '';
}

fetch('https:/source.unsplash.com/1920x1080/?sky')
    .then((data)=>{
        $('#wrap').css({
            'background': 'url("' + data.url + '")',
            'backgroundSize': 'cover'
        })
    })

if (deviceType() === 'mobile') {
    $('#popup__image').css('display', 'none')
}

tippy('#button', {
    content: "<p class='button__card-num'>4526 5624 8974 2563</p>",
    followCursor: true,
    offset: [10, 15],
    theme: 'theme',
    animation: 'scale',
    extreme: true,
    inertia: true,
    allowHTML: true,
    touch: ['hold', 500]
});

// alert(deviceType());

$('#button').click(function () {
    $('.popup__mask').fadeIn(300);
    $('.popup').css({
        'display': 'flex',
        'animation': 'open 0.6s 1 cubic-bezier(0,.72,.41,.99)'
    })
    setTimeout(function () {
        $('.popup').css({
            'animation': 'unset'
        })
    },600)
})

$('#popup__close-btn').click(function () {
    closePopup()
})

$('#popup__ok-btn').click(function () {
    closePopup();
})