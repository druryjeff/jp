/**
 * ------------------------------------------------------------
 * Initiate Foundation
 * ------------------------------------------------------------
 */

 $(document).foundation();


/**
 * ------------------------------------------------------------
 * Jump to Footer Link
 * ------------------------------------------------------------
 */

$('.trigger-menu a').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    var top = $(target).offset().top;
    $('html,body').animate({
      scrollTop: top
    },1000,$.bez([.5, 0, .5, 1]));
  });


/**
 * ------------------------------------------------------------
 * Open External Links in a New Window
 * ------------------------------------------------------------
 */

$('.nav-areas a').attr('target','_blank');


/**
 * ------------------------------------------------------------
 * Orbit Slider (for Bio)
 * ------------------------------------------------------------
 */

// hide prevoius/next at beginning/end of cycle
var slides = $('.orbit-slide').length;
$('.orbit-previous').addClass('orbit-curr-slide');

$('.orbit-controls').click('li',function() {
    if( $('.orbit-slide.is-active').attr('data-slide') == 0 ) {
      $('.orbit-previous').addClass('orbit-curr-slide');
    } else if ( $('.orbit-slide.is-active').attr('data-slide') == (slides-1) ) {
      $('.orbit-next').addClass('orbit-curr-slide');
    } else {
      $('.orbit-controls li').removeClass('orbit-curr-slide');
    }
});


/**
 * ------------------------------------------------------------
 * Logo Animation
 * ------------------------------------------------------------
 */

Splitting();

