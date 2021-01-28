'use strict'
{
  $(function () {
    // スムーススクロール
    function smoothScroll(headerHeight, _this) {
      var href= $(_this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top-headerHeight; 
      $("html, body").animate({scrollTop:position}, 500, "swing");
      return false;
    }
    $('a[href^="#"]:not(a[href="#scroll"]').on('click', function () {
      smoothScroll(150, this);
    });
    $('a[href^="#scroll"]').on('click', function () {
      smoothScroll(0, this);
    });

    var startPos = 0;
    var scrollPos = 0;
    var topImageHeight = $('.top-image').height();
    var width = $('html').width();
    $(window).on('scroll', function () {
      // スクロールでheader表示切り替え
      scrollPos = $(this).scrollTop();
      if (width >= 768 && scrollPos >= topImageHeight) {
        if (scrollPos >= startPos) {
          $('#header').addClass('hide');
        } else {
          $('#header').removeClass('hide');
        }
      }
      
      if (scrollPos >= topImageHeight) {
        $('#header').addClass('white-bg');
      } else {
        $('#header').removeClass('white-bg');
      }
      startPos = scrollPos;
    })
    
    $('.speech-bubble').hover(
      function () {
        var triangle = $(this).prev();
        triangle.addClass('hovering');
      },
      function () {
        var triangle = $(this).prev();
        triangle.removeClass('hovering');
      }
    )
    
    // ハンバーガー
    $('.nav-toggle').click(function () {
      var deviceWidth = $('html').width();
      $('.nav-toggle').toggleClass('cross');
      $('.nav-menu').toggleClass('open');
      $("html").toggleClass("no-scroll");

      if ($('.nav-menu').hasClass('open')) {
        $('.nav-menu').stop().animate({
          left: 0
        }, 500);
      } else {
        $('.nav-menu').stop().animate({
          left: deviceWidth
        }, 500);
      }
    });
  });
}