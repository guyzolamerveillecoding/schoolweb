jQuery(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})

$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})

// WOW
new WOW().init();



// Librairires SweetAlert or SweetAlert Bootstrap

