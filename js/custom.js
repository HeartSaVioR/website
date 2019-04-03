$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });
//    ------------------------------------
$(document).ready(function(){
    $("button").click(function(){
      $(".navbar-toggler").toggleClass("main");
    });
  });