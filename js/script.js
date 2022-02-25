$(function () {

  //ページ内スクロール
  let navHeight = $(".header").outerHeight();

  let topBtn = $("#js-page-top");

  $('a[href^="#"]').on("click", function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  $(window).on('scroll load',function scroll_effect() {
    if($(this).scrollTop()>120){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    }
  });

  //ページトップ
  topBtn.on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});
