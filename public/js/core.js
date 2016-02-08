$(document).ready(function() {
var core = {
  
  el: {
    $w: $(window),
    $html: $('html'),
    $navLink: $('#menu-btn'),
    $sectionLinks: $('#nav ul li a'),
    $wrapper: $('#wrapper'),
    $sslide: $('.slick-module'),
    $heroSection: $('#hero'),
    $whatido: $('#what-i-do'),
    $video: $('#hero-video'),
    $work: $('#work'),    
    $btnAbout: $('#about-btn'),
    $btnAboutClose: $('#about-btn-close')


  },
  
  init: function() {
    

  	core.el.$html.addClass('body-active');

    $('.work-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      nextArrow:'<a class="next slick-next" href="#"><span class="icon-wrap"></span><h3><strong>Susan</strong> Walter</h3></a>',
      prevArrow:'<a class="prev slick-prev" href="#"><span class="icon-wrap"></span><h3><strong>Susan</strong> Walter</h3></a>'
    });

    core.setUIEvents();
    $('body').resize();
  },
  
  setUIEvents: function() {
    core.el.$navLink
        .on('click',function(e) {
        	core.activateMenu(e);
        	e.preventDefault();
      	});
    core.el.$sslide
      .on({
          mousedown: function() {
          $( this ).addClass( "grabbed" );
        }, mouseup: function() {
          $( this ).removeClass( "grabbed" );
        }
      });
    core.el.$btnAbout
        .on('click',function(e) {
          core.el.$heroSection.toggleClass("active-about");
          e.preventDefault();
        });
    core.el.$btnAboutClose
        .on('click',function(e) {
          core.el.$heroSection.toggleClass("active-about");
          e.preventDefault();
        });

    core.el.$sectionLinks.on('click',function(){
      
      $.scrollTo(''+$(this).attr("href")+'',500,{'axis':'y', onAfter:function(){ setTimeout(function(){core.activateMenu()}, 100) } });
      
    });

    //Section Offsets
     core.el.$w.scroll(function(){ 

        if(core.el.$w.scrollTop() >= (core.el.$whatido.offset().top - 100) ){
          core.el.$whatido.addClass("wid-active");
        }else{
          core.el.$whatido.removeClass("wid-active");
        }
        if(core.el.$w.scrollTop() >= (core.el.$work.offset().top - 100) ){
          core.el.$work.addClass("work-active");
        }else{
          core.el.$work.removeClass("work-active");
        }
        if(core.el.$w.scrollTop() >= (core.el.$video.offset().top - 100) ){
          core.el.$video.addClass("video-active");
        }else{
          core.el.$video.removeClass("video-active");
        }  

    });

    $('a.slick-next').on('click',function(e){e.preventDefault(e);})
    $('a.slick-prev').on('click',function(e){e.preventDefault(e);})

  },
  
  activateMenu: function() {
    core.el.$navLink.toggleClass('menu-btn-open').parent().toggleClass('menu-open');
    core.el.$wrapper.toggleClass('menu-open');
  }
};

core.init();

});