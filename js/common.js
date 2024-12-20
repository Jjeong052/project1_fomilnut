$(document).ready(function(){

  AOS.init();

  $(".depth2").hide();
  $(".gnb > li").mouseover(function(){
    $(this).children(".depth2").stop().fadeIn().siblings().fadeOut();    
  });

  var mv = new Swiper(".mv", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

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