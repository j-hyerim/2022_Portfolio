
window.addEventListener('scroll', function(){
  console.log(window.scrollY); //스크롤값 확인하기
});

// // content가 화면에 80% 지점일 때 동작하는 스크립트
const spyEl = document.querySelectorAll('section.scroll-spy');

spyEl.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement:spyEl,
    triggerHook:0.8,
  })
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller());
});

//protfolio 버튼 클릭하면 아래 박스 열리게
const promotionEl = document.querySelector('div.portfolio');
const promotionEl2 = document.querySelector('div.about');
const toggleBtnEl = document.querySelector('#port_btn');
const aboutBtnEl2 = document.querySelector('#about_btn');

toggleBtnEl.addEventListener('click',function(){
  if(promotionEl.classList.contains('hide')){
    promotionEl.classList.remove('hide');
  }else{
    promotionEl.classList.add('hide');
  }
});
aboutBtnEl2.addEventListener('click',function(){
  if(promotionEl2.classList.contains('hide')){
    promotionEl2.classList.remove('hide');
  }else{
    promotionEl2.classList.add('hide');
  }
});

$("html, body").on('mousewheel DOMMouseScroll',function(e){

  var wheelDelta = e.originalEvent.wheelDelta;
      console.log(wheelDelta);
      
  if(wheelDelta > 0){
    console.log("up");
    $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
  }else{
  console.log("down");
    $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
  }
    });

$(document).ready(function(){

  //portfolio 버튼 클릭하면 animate 효과가 멈춤
  $("#port_btn").click(function(){
    $(this).removeClass("animate");
    $(".mouseIcon").css({"opacity":"1"});
  });

  //top 버튼을 누르면 contents가 닫힘
  $(".top_btn").click(function(){
  $(".portfolio").addClass("hide");
  });
  $(".top_btn2").click(function(){
  $(".about").addClass("hide");
  });

});