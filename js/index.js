'use strict';

document.addEventListener('scroll', function(event) {
    var x = event.target.body.scrollTop,
        transY = (x * 0.5),
        scale = 1 + (x * 0.0012),
        transform = 'translateY('+transY+'px) scale('+scale+') translate3d(0,0,0)',
        header = document.querySelector('.header-bg').style,
        logo = document.querySelector('.profile__logo').style,
        name = document.querySelector('.profile__name').style;

    logo.opacity = 1 - (x * 0.0022);
    name.opacity = 1 - (x * 0.0018);
    header.opacity = 1 - (x * 0.0008);
    header.WebkitTransform = transform;
    header.MozTransform = transform;
    header.msTransform = transform;
    header.transform= transform;
});