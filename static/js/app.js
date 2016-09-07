$( document ).ready(function() {
  $( "div" ).hover(
    function() {
      $(this).children(".holder").addClass("layer")
    }, function() {
      $(this).find(".holder").removeClass("layer")
    }
  );
});
