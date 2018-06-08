function scrollToAnchor(aid){
    var aTag = $("span[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#about-us").click(function() {
   scrollToAnchor('about-us');
});

$("#events").click(function() {
   scrollToAnchor('events');
});

$("#gallery").click(function() {
   scrollToAnchor('gallery');
});

$("#contact").click(function() {
   scrollToAnchor('contact');
});

$("#top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
