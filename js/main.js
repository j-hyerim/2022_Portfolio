
window.addEventListener('scroll', function () {
  console.log(window.scrollY); //스크롤값 확인하기
});

// // content가 화면에 80% 지점일 때 동작하는 스크립트
const spyEl = document.querySelectorAll('section.scroll-spy');

spyEl.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

//protfolio 버튼 클릭하면 아래 박스 열리게
const promotionEl = document.querySelector('div.portfolio');
const promotionEl2 = document.querySelector('div.about');
const toggleBtnEl = document.querySelector('#port_btn');
const aboutBtnEl2 = document.querySelector('#about_btn');

toggleBtnEl.addEventListener('click', function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});
aboutBtnEl2.addEventListener('click', function () {
  if (promotionEl2.classList.contains('hide')) {
    promotionEl2.classList.remove('hide');
  } else {
    promotionEl2.classList.add('hide');
  }
});


$(document).ready(function () {

  //portfolio 버튼 클릭하면 animate 효과가 멈춤
  $("#port_btn").click(function () {
    $(this).removeClass("animate");
    $(".mouseIcon").css({ "opacity": "1" });
  });

  //top 버튼을 누르면 contents가 닫힘
  $(".top_btn").click(function () {
    $(".portfolio").addClass("hide");
  });
  $(".top_btn2").click(function () {
    $(".about").addClass("hide");
  });



  // $('div section').each(function(){
  //   // 개별적으로 Wheel 이벤트 적용
  //   $(this).on('mousewheel',function(e){
      
  //     var delta = 0;
  //     var moveTop = null;
  //     var boxMax = $("div section").length - 1;
  //     var winEvent = "";
  //     console.log(boxMax);
      
  //     if(!winEvent) { //만약에 이벤트가 발생하지 않는다면
  //       winEvent = window.event; //이벤트는 없다
  //     }
  //     if(winEvent.wheelDelta) { //만약에 이벤트에서 휠데이터값이 있다면
  //       delta = winEvent.wheelDelta / 120; //데이터값을 저장
  //       if(window.opera) {
  //           delta = -delta;
  //       }
  //     }          
  //     else if(winEvent.detail) { //그렇지 않으면
  //       delta = -winEvent.detail / 3; 
  //     }
            
  //     // 마우스휠을 위에서 아래로 이동(처음에서 다음박스로 이동)
  //     if(delta < 0) {
  //         // 마지막 BOX 보다 순서값이 작은 경우에 실행
  //         if($(this).index() < boxMax) {
  //             console.log("▼");
  //             if($(this).next() != undefined) {
  //                 moveTop =$(this).next().offset().left;
  //             }
  //         }
  //         // 마지막 article보다 더 오른쪽으로 이동하려고 하는 경우 알림창 출력
  //         else {
  //             alert("마지막 페이지 입니다.");
  //             return false;
  //         }
  //     }
  //     // 마우스휠을 아래에서 위로 이동( 뒤에서 앞으로 이동)
  //     else {
  //         // 첫번째 article보다 순서값이 큰 경우에 실행
  //         if($(this).index() > 0) {
  //             console.log("▲");
  //             if($(this).prev() != undefined) {
  //                 moveTop =$(this).prev().offset().left;
  //             }
  //         }
  //         // 첫번째 article보다 더 위로 이동하려고 하는 경우 알림창 출력
  //         else {
  //             alert("첫번째 페이지 입니다.");
  //             return false;
  //         }
  //     }
  //         //화면 이동 0.3초(300)
  //         $("html,body").stop().animate({scrollLeft : moveTop + "px"}, 300, 'easeOutQuint');
  //     });
  //   });
  
});