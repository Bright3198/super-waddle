$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    lazyLoad: true,
    animateOut: 'fadeOut',
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
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
})
$('.owl-artists').owlCarousel({
    loop:true,
    margin:0,
    lazyLoad: true,
    animateOut: 'fadeOut',
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.owl-one').owlCarousel({
    loop:true,
    margin:0,
    lazyLoad: true,
    animateOut: 'fadeOut',
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

$('.owl-two').owlCarousel({
    loop:true,
    margin:0,
    lazyLoad: true,
    animateOut: 'fadeOut',
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
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
})
