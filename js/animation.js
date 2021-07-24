//-----------------
//   本のスライド
//-----------------
$('.slider').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  responsive: [
    {
        breakpoint: 769,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    },
    {
        breakpoint: 426,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
  ]
});

//-----------------
//   よくある質問の開閉
//-----------------

//よくある質問の開閉
$(".faq-head").on("click", function() {

  $(".faq-head").not(this).removeClass("open");
  $(".faq-head").not(this).next().slideUp(300);
  $(this).toggleClass("open");
  $(this).next().slideToggle(300);
});

//-----------------
//   メニューボタン
//-----------------

// メニュー＆背景クリック時
$(".gnav-sp-wrap").on("click", function() {
  $(this).fadeToggle(500);
  $('.menu-button-inner').toggleClass('active');
});
// ✕ボタンクリック時
$(".menu-button-inner").click(function () {
  $('.gnav-sp-wrap').fadeToggle(500);
  $(this).toggleClass('active');
});

//-----------------
//   ページ内スクロール
//-----------------
$('#page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top;
  $('body,html').animate({scrollTop: pos}, 500);
  return false;
});

//-----------------
//   ふわっと出現
//-----------------
ScrollReveal().reveal('body > div', { 
  duration: 800,
  viewFactor: 0.2,
  reset: true
});

//-----------------
//   pagetop
//-----------------

function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200){
    $('#page-top').removeClass('DownMove');
    $('#page-top').addClass('UpMove');
  }else{
    if($('#page-top').hasClass('UpMove')){
      $('#page-top').removeClass('UpMove');
      $('#page-top').addClass('DownMove');
    }
  }
}

// 画面をスクロールをしたら動かしたい場合
$(window).scroll(function () {
  PageTopAnime();
});

// ページが読み込まれたらすぐに動かしたい場合
$(window).on('load', function () {
  PageTopAnime();
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false; //リンク自体の無効化
});
