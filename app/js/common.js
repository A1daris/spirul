$('document').ready(function() {
    //tabs
    $(".tab_item").not(":first").hide();
    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).show()
    }).eq(0).addClass("active");

	// Owl carousel plugin https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
	});
  
  // Owl carousel plugin https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html
  $('.owl-carousel-2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    700:{
        items:3
    },
    1000:{
        items:3
    }
    }
   });
  
    // Owl carousel plugin https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html
  $('.owl-carousel-3').owlCarousel({
    loop:true,
    margin:28,
    responsive:{
    0:{
        items:1
    },
    480:{
        items:1
    },
    760:{
        items:3
    },
    1000:{
        items:3
    }
    },
    nav:false
    
	});
    $('.owl-carousel-4').owlCarousel({
    loop:true,
    margin:28,
    responsive:{
    0:{
        items:1
    },
    480:{
        items:1
    },
    760:{
        items:4
    },
    1000:{
        items:4
    }
    },
    nav:false
    
    });
    $('.owl-carousel-5').owlCarousel({
    nav: true,
    loop: true,
    margin: 28,
        responsive:{
    0:{
        items:1
    },
    480:{
        items:1
    },
    760:{
        items:4
    },
    1000:{
        items:4
    }
    },
    dots: false,
    navText: ["&#32;","&#32;"]
    
    });
  //ion slider docs: http://ionden.com/a/plugins/ion.rangeSlider/en.html
    $("#range_03").ionRangeSlider({
        type: "double",
        // grid: true,
        min: 5,
        max: 200,
        from: 10,
        to: 90,
        hide_min_max: true,
        postfix: " &euro;"
    });
        $("#range_04").ionRangeSlider({
        type: "double",
        // grid: true,
        min: 5,
        max: 200,
        from: 10,
        to: 90,
        hide_min_max: true,
        postfix: " &euro;"
    });


});
