$(function () {
  $('.header-disabled').hover(
    function () {
      $('.transparent-area').remove();
      if ($('.hovered')) {
        closeSpeechBubble()
      }
      var speechBubble = $(this).next();
      $(this).addClass('hovered');
      speechBubble.addClass('hovered');
      transparentAreaWidth = speechBubble.outerWidth();
      transparentAreaHeight = 35;
      $(this).before('<div class="transparent-area hovered"></div>');
      $('.transparent-area').offset({
        top: speechBubble.offset().top - 35,
        left: speechBubble.offset().left
      })
      $('.transparent-area').width(transparentAreaWidth);
      $('.transparent-area').height(transparentAreaHeight);
    },
    function () {
      if (($('.transparent-area').is(':hover'))) {
        $('.speech-bubble.hovered').mouseleave(
          function () {
            $('.transparent-area').remove();
            closeSpeechBubble();
          }
        )
      } else {
        $('.transparent-area').remove();
        closeSpeechBubble();
      }
    }
  )


    
  $('.footer-disabled').hover(
    function () {
      $('.transparent-area').remove();
      if ($('.hovered')) {
        closeSpeechBubble()
      }
      var speechBubble = $(this).next();
      $(this).addClass('hovered');
      speechBubble.addClass('hovered');
      transparentAreaWidth = speechBubble.outerWidth();
      transparentAreaHeight = 42;
      $(this).before('<div class="transparent-area hovered"></div>');
      $('.transparent-area').offset({
        top: speechBubble.offset().top + speechBubble.outerHeight(),
        left: speechBubble.offset().left
      })
      $('.transparent-area').width(transparentAreaWidth);
      $('.transparent-area').height(transparentAreaHeight);
    },
    function () {
      if ($('.transparent-area').is(':hover')) {
        $('.footer-speech-bubble.hovered').mouseleave(
          function () {
            $('.transparent-area').remove();
            closeSpeechBubble()
          }
        )
      } else {
        $('.transparent-area').remove();
        closeSpeechBubble()
      }
    }
  );

  function closeSpeechBubble() {
    $('.header-disabled').removeClass('hovered');
    $('.footer-disabled').removeClass('hovered');
    $('.speech-bubble').removeClass('hovered');
    $('.footer-speech-bubble').removeClass('hovered');
  }
      
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