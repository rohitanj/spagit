'use strict';

(function() {
  // Avoid `console` errors in browsers that lack a console.
  var method;
  var noop = function() {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
  // Place any jQuery/helper plugins in here.
}());

// Init plugins for theme
//
$(document).ready(function() {
  // Animation function
  $.fn.extend({
    animateCss: function(animationName) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(this).addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
      });
    }
  });

  var $this = $(this);
  var clickEvent = 'click';

  // Show info - page rooms-list
  $('.room-banner').on({
    mouseenter: function() {
      $(this).addClass('active');
      $('.room-banner__more p', $(this)).animateCss('slideInDown');
      $('.link-more', $(this)).animateCss('slideInLeft');
    },
    mouseleave: function() {
      $(this).removeClass('active');
    }
  });

  // navigation custom Slideout.js
  var slideout = new Slideout({
    'panel': document.getElementById('pageContent'),
    'menu': document.getElementById('panelMenu'),
    'padding': 256,
    'tolerance': 70,
    'touch': false
  });

  var slideMenuOpen = document.querySelector('#trigger');
  var slideMenuClose = $('#overPage, .panel-menu-header');
  var resetLevel = $('.panel-menu-content, .panel-list-level');
  var menuClose = $("[data-menu='close']");
  var title = $(menuClose).find('.text');

  slideMenuOpen.addEventListener(clickEvent, function(event) {
    event.preventDefault();
    slideout.toggle();
  });

  slideMenuClose.on(clickEvent, function() {
    if ($('html').hasClass('slideout-open')) {
      slideout.close();
      resetLevel.removeClass('open');
      title.text(menuClose.data('title'));
    }
  });

  // push content
  slideout.on('beforeopen', function() {
    document.querySelector('.navbar').classList.add('open');
    document.querySelector('.page-footer').classList.add('open');
    document.querySelector('.over-page').classList.add('open');
  });

  slideout.on('beforeclose', function() {
    document.querySelector('.navbar').classList.remove('open');
    document.querySelector('.over-page').classList.remove('open');
    document.querySelector('.page-footer').classList.remove('open');
  });

  // push level menu
  var menuOpen = $('.panel-list-current > [role=button]');
  var menuClose = $("[data-menu='close']");
  var levelOpen = $('.panel-menu-content');
  var levelTitle = $('.menu-back');
  var title = $(menuClose).find('.text');

  // open
  menuOpen.on(clickEvent, function(event) {
    event.preventDefault();
    levelOpen.addClass('open');
    $(this).parent().next().addClass('open');
    title.text($(this).parent().next().find(levelTitle).data('title'));
  });

  // close
  menuClose.on(clickEvent, function(event) {
    event.preventDefault();
    $(this).removeClass('open');
    levelOpen.removeClass('open');
    $('.panel-list-level').removeClass('open');
    title.text(menuClose.data('title'));
  });

  // http://git.blivesta.com/animsition/
  // A SIMPLE AND EASY JQUERY PLUGIN FOR CSS ANIMATED PAGE TRANSITIONS.
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([href^="tel"]):not([href^="mailto"]):not(#blueimp-gallery a):not(#gallerySection .gallery-item-link)',
    loading: true,
    loadingParentElement: 'body',
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'body',
    transition: function(url) {
      window.location.href = url;
    }
  });

  // Simple jQuery plugin to equalize heights of multiple elements on a page.
  $('.pricing-panel, .hm-features-2__item').resize().equalHeights();

  // owl inits after loading all images
  $(window).resize().imagesLoaded().always(function(instance) {

    // JavaScript parallax scrolling https://github.com/nk-o/jarallax
    $('.intro-bg').jarallax({
      speed: 0.5,
      type: 'scroll'
    });

    // jQuery Responsive Carousel. http://owlcarousel2.github.io/OwlCarousel2/
    // carousel spa-menu, testimonial and our-clients
    var carouselOwl = $('.owl-carousel');

    carouselOwl.each(function() {
      var spaMenu = $('#spaMenuCarousel');
      var ourClients = $('#clientsCarousel');
      var his = $('#historyCarousel');
      var $this = $(this);

      spaMenu.owlCarousel({
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoHeight: true,
        mouseDrag: false,
        touchDrag: false,
        loop: true,
        nav: false,
        dotsData: true,
        dotsContainer: '#controlTabs',
        lazyLoad: true
      });

      ourClients.owlCarousel({
        loop: true,
        nav: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoHeight: false,
        dots: true,
        mouseDrag: true,
        touchDrag: true,
        dotsContainer: '#our-clients-dots',
        responsive: {
          0: {
            items: 1
          },
          480: {
            items: 2
          },
          768: {
            items: 3
          }
        }
      });

      // bind custom controls
      his.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        dotsContainer: '#controlDots'
      });

      $this.parent().find('.next').on(clickEvent, function() {
        $this.trigger('next.owl.carousel');
      });

      $this.parent().find('.prev').on(clickEvent, function() {
        $this.trigger('prev.owl.carousel');
      });
    });

    // Add the following JavaScript code after including the Gallery script, to display the images in the Gallery lightbox on click of the links
    var galleryLinks = $("#gallerySection .gallery-item-link");
    galleryLinks.on(clickEvent, function(event) {
      event.preventDefault();
      var currentLink = $("#gallerySection .gallery-item-link").index(this);
      var galleryOptions = {
        index: currentLink,
        event: event,
        fullscreen: true,
        hidePageScrollbars: false,
        disableScroll: true
      };

      blueimp.Gallery(galleryLinks, galleryOptions);
    });
  });

  // Cascading grid Masonry for galleries
  //
  var gridGallery = $("#grid-gallery");
  var gridItem = $(".gallery__item, .grid-item");
  gridItem.hide();

  gridGallery.imagesLoaded(function() {
    gridItem.fadeIn();

    gridGallery.masonry({
      columnWidth: ".grid-sizer",
      itemSelector: ".gallery__item",
      percentPosition: true
    });

    var grid = gridGallery.isotope({
      itemSelector: '.gallery__item',
      resizable: false,
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer'
      }
    });

    $(".filter-button-group").on(clickEvent, 'button', function(event) {
      event.preventDefault();
      var filterValue = $(this).attr('data-filter');

      grid.isotope({filter: filterValue});
    });
  });

  // http://imakewebthings.com/
  // Waypoints is the easiest way to trigger a function when you scroll to an element.
  $(".stat-num .count").counterUp({
    delay: 30,
    time: 4000
  });

  // Bootstrap mod for forms datepicker & clockpicker
  //
  $(".datepicker").datepicker({
    orientation: "bottom",
    keyboardNavigation: true,
    format: "mm/dd/yyyy"
  });

  $('.clockpicker').clockpicker({
    autoclose: true
  });

  // form Reservation
  $('#reservMan, #mdReservMan').barrating({
    hoverState: false
  });
  var form = $("#formRes #checkReset");
  var mdForm = $("#mdFormRes #mdCheckReset");

  form.on(clickEvent, function() {
    $('.br-widget', $this).toggleClass('disable');
  });
  mdForm.on(clickEvent, function() {
    $('.br-widget', $this).toggleClass('disable');
  });

  // Most modern mobile touch slider with hardware accelerated transitions
  //
  var swiperIntro = $('.intro-slider').swiper({
    pagination: '.swiper-pagination',
    loop: true,
    paginationClickable: true,
    autoplayStopOnLast: true,
    autoplayDisableOnInteraction: true,
    autoplay: 9000,
    speed: 1200,
    effect: 'coverflow',
    coverflow: {
      rotate: 25,
      stretch: 0,
      depth: 100,
      slideShadows: true,
      modifier: 1
    },
    parallax: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });

  // swiper gallery - room-details
  //
  if ($('#roomDetails').length) {
    var swiperGallery = $('.room-gallery__slides').swiper({
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 8
    });

    var swiperTrack = $('.room-gallery__track').swiper({
      spaceBetween: 0,
      slidesPerView: 'auto',
      centeredSlides: true,
      direction: 'vertical',
      height: 700,
      mousewheelControl: true,
      touchRatio: 0.8,
      slideToClickedSlide: true
    });

    swiperGallery.params.control = swiperTrack;
    swiperTrack.params.control = swiperGallery;

    $(window).resize(function() {
      var media = $(window).width();
      if (media < 768) swiperTrack.params.direction = 'horizontal';
      if (media > 768) swiperTrack.params.direction = 'vertical';
      swiperTrack.update();
    });
    $(window).trigger('resize');
  }

  // Bootstrap tooltips
  //
  $('[data-toggle="tooltip"]').tooltip().on(clickEvent, function(event) {
    event.preventDefault();
  });

  // use a custom yutube player for a video as background on jQuery framework
  //
  $("#introVideo").YTPlayer({
    videoURL: 'http://youtu.be/3ET1wM5qUpM',
    containment: '#introVideoContain',
    autoPlay: true,
    mute: true,
    loop: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    showAnnotations: false,
    showYTLogo: false
  });

  // bind buttons
  var btnPlay = $('[data-play]');

  btnPlay.on({
    mouseenter: function() {
      $('.video-contain__preview').addClass('hover');
    },
    mouseleave: function() {
      $('.video-contain__preview').removeClass('hover');
    },
    click: function() {
      $('.video-contain').addClass('actived');
    }
  });

  // play video-tour
  $('#videoTourPlay').on(clickEvent, function() {
    $('#videoTourContain').html('<iframe id="video" width="100%" height="640" src="https://www.youtube.com/embed/3ET1wM5qUpM?&autoplay=1&loop=1&controls=0&rel=0&wmode=transparent" frameborder="0" allowfullscreen></iframe>');
  });

  // play video-blog
  $('#videoBlogPlay').on(clickEvent, function() {
    $('#videoBlogContain').html('<iframe id="video" width="100%" height="640" src="https://www.youtube.com/embed/3ET1wM5qUpM?&autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen></iframe>');
  });
});

