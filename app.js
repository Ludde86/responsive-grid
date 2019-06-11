// this code (document ready function) will execute when the entire page is loaded
$(document).ready(function() {
  /* MOBILE NAVIGATION */

  // we set up menu icon and a click function (mobile-hide is set to default)
  $(".burger-icon").on("click", function() {
    // when a uses clicks on the menu icon
    // if main-nav has class mobile-hide, remove mobile-hide, and add class mibile-show
    // this shows the menu
    if ($(".main-nav").hasClass("mobile-hide")) {
      $(".main-nav").removeClass("mobile-hide");
      $(".main-nav").addClass("mobile-show");
      // if not, add mobile-hide, and remove mobile-show
      // this hides the menu
    } else {
      $(".main-nav").addClass("mobile-hide");
      $(".main-nav").removeClass("mobile-show");
    }
  });
});
