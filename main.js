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

const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};

alert(deviceType());