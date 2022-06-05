fetch('https:/source.unsplash.com/1920x1080/?sky')
    .then((data)=>{
        $('#wrap').css({
            'background': 'url("' + data.url + '")',
            'backgroundSize': 'cover'
        })
    })

tippy('#button', {
    content: "<p class='button__card-num'>4526 5624 8974 2563</p>",
    followCursor: true,
    offset: [10, 15],
    theme: 'theme',
    animation: 'scale',
    extreme: true,
    inertia: true,
    allowHTML: true
});

// alert(deviceType());