$(function () {

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