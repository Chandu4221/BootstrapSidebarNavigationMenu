window.onload = function() {
  if (window.jQuery) {
    $(document).ready(function() {
      $(".sidebarNavigation .navbar-collapse")
        .hide()
        .clone()
        .appendTo("body")
        .removeAttr("class")
        .addClass("sideMenu")
        .show();
      $("body").append("<div class='overlay'></div>");

      $(".navbar-toggle").on("click", function() {
        $(".sideMenu").addClass(
          $(".sidebarNavigation").attr("data-sidebarClass")
        );
        $(".sideMenu, .overlay").toggleClass("open");
        $(".overlay").on("click", function() {
          $(this).removeClass("open");
          $(".sideMenu").removeClass("open");
        });
      });

      /*on resize*/
      $(window).resize(function() {
        if ($(".navbar-toggle").is(":hidden")) {
          $(".sideMenu, .overlay").hide();
        } else {
          $(".sideMenu, .overlay").show();
        }
      });
    });
  } else {
    console.log("sidebarNavigation Requires jQuery");
  }
};
