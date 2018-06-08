// to fade in on page load
$('body').hide().fadeIn(1500);
// to fade out before redirect
$('.red').click(function(e){
    redirect = $(this).attr('href');
    e.preventDefault();
    $('html, body').fadeOut(1500, function(){
        window.location.href = redirect
    });
});
