$(function() {
  $('.lazy').Lazy({
    effect: "fadeIn",
    threshold: 0,
    //Ommit loading all images at once
    beforeLoad: function(element) {
      element.css({"height": "200px"});
    },
    afterLoad: function(element) {
      element.css({"height": "auto"});
    }
  });
});
