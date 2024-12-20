$(document).ready(function(){

  AOS.init();

  $(".depth2").hide();
  $(".gnb > li").hover(
    function () {
      // 현재 li의 .depth2만 보이게 설정
      $(this).children(".depth2").stop().fadeIn();
    },
    function () {
      // hover가 끝나면 다시 숨김
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