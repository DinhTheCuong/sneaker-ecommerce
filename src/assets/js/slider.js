

function resp1(x) {
    if (x.matches) { // If media query matches
      
        $('#slider').slick({
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
        });
        
        $('.slider1').slick({
            slidesToShow: 1.5,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false
        });
        
        $('.slider2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            arrows: false
        });
        
        $('.slider3').slick({
            slidesToShow: 1.5,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false
        });
        
        $('.slider4').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false
        });
        
        $('.slider5').slick({
            slidesToShow: 2.5,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            vertical: true
        });
        
        $('.slider6').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
        });
        

    } else {      
        $('#slider').slick({
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false
        });
        
        $('.slider1').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false
        });
        
        $('.slider3').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false
        });
        
        $('.slider4').slick({
            slidesToShow: 2.5,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false
        });
        
        $('.slider5').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false
        });        
    }
  }
  
  var x = window.matchMedia("(max-width: 832px)")
  resp1(x) // Call listener function at run time