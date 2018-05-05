$(document).ready(function(){
    //Page scroll
    var headerHeight = $("header").outerHeight(); //Get this the header Height
    $(".slide-section").on("click", function(e){
      var linkHref = $(this).attr("href"); //this is to get the href value.
      $("html, body").animate({
        scrollTop: $(linkHref).offset().top - 50
      }, 1000);
      e.preventDefault();//just to prevent the default value on the page
    });

  //Mobile navigation
  $(".mobile-nav").on("click",function(){
    $(" header nav ul").toggleClass("open");
  });

});
