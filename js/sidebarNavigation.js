window.onload = function()
{
  if (window.jQuery)
  {
$(document).ready(function(){
$(".sidebarNavigation").ready(function(){
  var newId = $(".sidebarNavigation .navbar-collapse").attr("id");
  var bgColor = $(".sidebarNavigation").css("backgroundColor");
  $(".sidebarNavigation .navbar-collapse")
    .hide()
    .clone()
    .appendTo("body")
    .attr("id",newId)
    .removeAttr("class")
    .addClass("sideMenu").show();
    $("body").append("<div class='overlay'></div>");
});
$(".navbar-toggle").on("click",function(){
  var classes = $(".sidebarNavigation").attr("data-sidebarClass");
  $(".sideMenu").addClass(classes);
  $(".sideMenu, .overlay").toggleClass("open");
  $(".overlay").on("click",function(){
    $(this).removeClass("open");
    $(".sideMenu").removeClass("open");
  });
});
 
$(window).resize(function(){
  if($(".navbar-toggle").is(":hidden")){
  $(".sideMenu, .overlay").hide();
  }
else{
  $(".sideMenu, .overlay").show();
}
});
});

}
else
{
    console.log("sidebarNavigation Requires jQuery");
}
}

