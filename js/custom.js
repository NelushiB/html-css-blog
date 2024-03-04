$(document).ready(function(){  
    $('.navbar').click(function(){
        $('.nav').toggleClass('show');
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() > 0) {
            $('.scroll-header').addClass('sticky');
        } else {
            $('.scroll-header').removeClass('sticky');
        }
    });

    $('.fade').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 100
   });

    function goToByScroll(id){
        $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
        }
        $('.top').click(function(){
        goToByScroll("top-header");
        return false;
    }); 

});



