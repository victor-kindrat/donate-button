$('.alert').fadeOut(0);
$(".popup__mask").fadeOut(0);
function closePopup () {
    $('.popup__mask').fadeOut(300);
    $('.popup').css({
        'animation': 'open 0.3s 1 cubic-bezier(0,.72,.41,.99) reverse'
    })
    setTimeout(function () {
        $('.popup').css({
            'animation': 'unset',
            'display': 'none'
        })
    },300);
    return '';
}

new ClipboardJS('#popup__ok-btn');

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
    inertia: true,
    allowHTML: true,
    touch: ['hold', 500],
});

tippy('#popup__ok-btn', {
    content: "Натисніть щоб зберегти номер рахунку",
    followCursor: true,
    offset: [10, 15],
    theme: 'theme',
    animation: 'scale',
    extreme: true,
    inertia: true,
    allowHTML: true,
    interactive: true,
});

$('#button').click(function () {
    $('.popup__mask').fadeIn(300);
    $('.popup').css({
        'display': 'flex',
        'animation': 'open 0.3s 1 cubic-bezier(0,.72,.41,.99)'
    })
    setTimeout(function () {
        $('.popup').css({
            'animation': 'unset'
        })
    },300)
})

$('#popup__close-btn').click(function () {
    closePopup()
})

$('#popup__ok-btn').click(function () {
    $('.alert').fadeIn(300);
    $(".alert").text('Збережено в буфер обміну');
    setTimeout(function () {
        $('.alert').fadeOut(300);
        $(".alert").text('');
        closePopup();
    }, 3000)
})