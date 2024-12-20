$(document).ready(function(){

  AOS.init();

  $(".depth2").hide();
  $(".gnb > li").hover(
    function () {
      $(".depth2").stop().fadeOut(); // 다른 메뉴 숨김
      $(this).children(".depth2").stop().fadeIn(); // 현재 메뉴 보임
    },
    function () {
      $(this).children(".depth2").stop().fadeOut();
    }
  );

  var shopSlide = new Swiper(".shop-slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
  });



  
});