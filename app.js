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

// * * * * * * * * * * * * * * * * * * * * * * * * * * *
//Portfolio Flyers
// * * * * * * * * * * * * * * * * * * * * * * * * * * *



document.onkeydown = keyHit;

  var myPix = new Array("images/Flyer1.jpg","images/Flyer2.jpg","images/Flyer3.jpg","images/Flyer4.jpg");
  var count;
  var thispic = 0;
  function keyHit(evt)
  {

    var thisKey = (evt) ? evt.which : window.event.keyCode

    if(thisKey == 37)
    {
      changeSlide(-1);
    }else if(thisKey == 39)
    {
      changeSlide(1);
    }
  }

  function changeSlide(direction)
    	{
    		thispic = thispic + direction;
    		if(thispic>myPix.length-1)
    		{
    			thispic = 0;
    		}

    		if(thispic<0)
    		{
    			thispic = myPix.length-1;
    		}
    		document.getElementById("myFlyers").src = myPix[thispic];
    	}

      //Klaude

      var myPix2 = new Array("images/logo.jpg","images/KlaudeFurlong-05.png","images/KlaudeFurlong-03.png","images/KlaudeFurlong-04.png");
      var count;
      var thispic = 0;
      function keyHit(evt)
      {

        var thisKey = (evt) ? evt.which : window.event.keyCode

        if(thisKey == 37)
        {
          changeSlide02(-1);
        }else if(thisKey == 39)
        {
          changeSlide02(1);
        }
      }

      function changeSlide02(direction)
          {
            thispic = thispic + direction;
            if(thispic>myPix2.length-1)
            {
              thispic = 0;
            }

            if(thispic<0)
            {
              thispic = myPix2.length-1;
            }
            document.getElementById("myKlaude").src = myPix2[thispic];
          }

        //myAlex

        var myPix3 = new Array("images/bookcover2.png","images/bookcover3.jpg","images/book-cover.jpg");
        var count;
        var thispic = 0;
        function keyHit(evt)
        {

          var thisKey = (evt) ? evt.which : window.event.keyCode

          if(thisKey == 37)
          {
            changeSlide03(-1);
          }else if(thisKey == 39)
          {
            changeSlide03(1);
          }
        }

        function changeSlide03(direction)
            {
              thispic = thispic + direction;
              if(thispic>myPix3.length-1)
              {
                thispic = 0;
              }

              if(thispic<0)
              {
                thispic = myPix3.length-1;
              }
              document.getElementById("myAlex").src = myPix3[thispic];
            }

            //myBagel

            var myPix4 = new Array("images/logo2.jpg","images/WoodOvenBAgel-01.jpg","images/WoodOvenBAgel-02.jpg","images/WoodOvenBAgel-03.jpg","images/WoodOvenBAgel-04.jpg");
            var count;
            var thispic = 0;
            function keyHit(evt)
            {

              var thisKey = (evt) ? evt.which : window.event.keyCode

              if(thisKey == 37)
              {
                changeSlide04(-1);
              }else if(thisKey == 39)
              {
                changeSlide04(1);
              }
            }

            function changeSlide04(direction)
                {
                  thispic = thispic + direction;
                  if(thispic>myPix4.length-1)
                  {
                    thispic = 0;
                  }

                  if(thispic<0)
                  {
                    thispic = myPix4.length-1;
                  }
                  document.getElementById("myBagel").src = myPix4[thispic];
                }

            //myDavid

            var myPix5 = new Array("images/magazines.jpg","images/Mag1.jpg","images/Mag2.jpg","images/Mag3.jpg","images/Mag4.jpg");
            var count;
            var thispic = 0;
            function keyHit(evt)
            {

              var thisKey = (evt) ? evt.which : window.event.keyCode

              if(thisKey == 37)
              {
                changeSlide05(-1);
              }else if(thisKey == 39)
              {
                changeSlide05(1);
              }
            }

            function changeSlide05(direction)
                {
                  thispic = thispic + direction;
                  if(thispic>myPix5.length-1)
                  {
                    thispic = 0;
                  }

                  if(thispic<0)
                  {
                    thispic = myPix5.length-1;
                  }
                  document.getElementById("myDavid").src = myPix5[thispic];
                }

                //myKaren

                var myPix6 = new Array("images/reports.jpg","images/rep1.jpg","images/rep2.jpg","images/rep3.jpg","images/rep4.jpg");
                var count;
                var thispic = 0;
                function keyHit(evt)
                {

                  var thisKey = (evt) ? evt.which : window.event.keyCode

                  if(thisKey == 37)
                  {
                    changeSlide06(-1);
                  }else if(thisKey == 39)
                  {
                    changeSlide06(1);
                  }
                }

                function changeSlide06(direction)
                    {
                      thispic = thispic + direction;
                      if(thispic>myPix6.length-1)
                      {
                        thispic = 0;
                      }

                      if(thispic<0)
                      {
                        thispic = myPix6.length-1;
                      }
                      document.getElementById("myKaren").src = myPix6[thispic];
                    }

        //myInfographics

                    var myPix7 = new Array("images/infographics.jpg","images/infog1.png","images/infog2.png","images/infog3.png","images/infog4.png");
                    var count;
                    var thispic = 0;
                    function keyHit(evt)
                    {

                      var thisKey = (evt) ? evt.which : window.event.keyCode

                      if(thisKey == 37)
                      {
                        changeSlide07(-1);
                      }else if(thisKey == 39)
                      {
                        changeSlide07(1);
                      }
                    }

                    function changeSlide07(direction)
                        {
                          thispic = thispic + direction;
                          if(thispic>myPix7.length-1)
                          {
                            thispic = 0;
                          }

                          if(thispic<0)
                          {
                            thispic = myPix7.length-1;
                          }
                          document.getElementById("myInfographics").src = myPix7[thispic];
                        }
