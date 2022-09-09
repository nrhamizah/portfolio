$(document).ready(function(){
  //main-slider
  $('#main-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    items: 1,
    navText: ["PREV", "NEXT"],
    smartSpeed:1000,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause: false,
    responsive:{
        0:{
            nav:false,
        },
        768:{
          nav: true,
        },
        1000:{
        }
    }
  })
});
