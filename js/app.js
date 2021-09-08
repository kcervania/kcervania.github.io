


// * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 1. Get HTML Elements
// * * * * * * * * * * * * * * * * * * * * * * * * * * *
var openButton      = document.querySelector('#open-mobile-menu-button');
var closeButton     = document.querySelector('#close-mobile-menu-button');
var mobileMenu      = document.querySelector('#mobile-menu');



// * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 2. Define Abilities (Functions)
// * * * * * * * * * * * * * * * * * * * * * * * * * * *
function openMenu() {
    mobileMenu.className = 'menu open';
}

function closeMenu() {
    mobileMenu.className = 'menu close';
}


$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});





// * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 3. Wire everything up
// * * * * * * * * * * * * * * * * * * * * * * * * * * *
openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

// * * * * * * * * * * * * * * * * * * * * * * * * * * *
//Testimonials
// * * * * * * * * * * * * * * * * * * * * * * * * * * *
$('.responsive').slick({
  dots: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});

