jQuery(document).ready(function($){

// MENU
function leftMenuClose(){
  $("body").removeClass('menuOpen')
}
function leftMenuOpen(){
  $("body").addClass('menuOpen')
}
  $(".menu-toggle").click(function(){
      if($("body").hasClass("menuOpen")){leftMenuClose();
      }else{leftMenuOpen();}
  });
  $( window ).resize(function() {
    if($( window ).width()>920){leftMenuClose();}
  });

// gallery resize
function checkSizes(){
  var width = $(window).width();
  var height = $(window).height();
  var prop  = width/height;
    if((width<600)||(height<867)){if(prop>0.692){portraitSize()}}else{landscapeSize()}
    if(height>867){landscapeSize()}
}

function portraitSize(){
  if(!$("#main").hasClass("por")){$("#main").addClass('por');}
}
function landscapeSize(){
  if($("#main").hasClass("por")){$("#main").removeClass('por')}
}

checkSizes();
$( window ).resize(function() {checkSizes()});


});






