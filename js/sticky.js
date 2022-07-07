
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 200 ){
            $('menu').addClass("active");
            $('.sub_menu2').addClass("activee");
            $('.sub_menu3').addClass("activee");
            $('.scroll-up-btn').addClass("active");
        }else{
            $('menu').removeClass("active");
            $('.sub_menu2').removeClass("activee");
            $('.sub_menu3').removeClass("activee");
            $('.scroll-up-btn').removeClass("active");
        }
    });

    //slide-up-script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

});

