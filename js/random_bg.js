var images = ['lenka.jpg', 'kaja.jpg', 'lidka.jpg', 'daniela.jpg'];
var image_index = Math.floor(Math.random() * images.length);
var bg_height = $(window).height() - $('nav').outerHeight();
$('.bg').css({'background-image': 'url(gallery/entry/' + images[image_index] + ')'});
$('.bg').css({'height' : bg_height + 'px'});
$('.bg').css({'margin-top' : $('nav').outerHeight() + 'px'});
switch(image_index) {
    case 0:
        $('.bg').css({'background-position': '67% 0%'});
        break;
    case 1:
        $('.bg').css({'background-position': '32% 0%'});
        break;
    case 2:
        $('.bg').css({'background-position': '15% 0%'});
        break;
    case 3:
        $('.bg').css({'background-position': '65% 0%'});
        break;
    default:
        break;
}
