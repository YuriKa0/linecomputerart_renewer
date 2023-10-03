document.addEventListener('touchstart',function(){});

// 스크롤 시 메뉴바 하얗게 됨
const header=document.querySelector('#main_header');
window.addEventListener('scroll',()=>{
  if(window.scrollY>0){
    header.classList.add('change');
  }else{
    header.classList.remove('change');
  }
});

//모바일 메뉴 버튼
let toggleState=true;
const toggle=document.querySelector('.toggle');
const logo=document.querySelector('h1');
toggle.addEventListener('click',()=>{
  if(toggleState){
    toggle.classList.add('active');
    document.querySelector('.gnb').style.top="0vh";
    logo.style.opacity="0";
    toggleState=false;
  }else{
    toggle.classList.remove('active');
    document.querySelector('.gnb').style.top="-100vh";
    logo.style.opacity="1";
    toggleState=true;
  }
});
if(window.innerWidth>1200){
  document.querySelector('.gnb').style="0";
}

// 모바일 서브메뉴 보이기
$('.gnb>ul>li>a').on('click',function(e){
    e.preventDefault();
    if($(window).width()<768 && $(this).next().css('display')=='none'){
      $('.sub:visible').slideUp(350);
      $(this).next().stop().slideDown(350);
    }else{
      $(this).next().stop().slideUp(350);
    }
  });/*
*/

//데스크탑 메뉴바
const Lists=document.querySelectorAll('.gnb>ul>li');

Lists.forEach((list)=>{
  list.addEventListener('mouseenter',(e)=>{
    // e.preventDefault();
    if(window.innerWidth>=1200){
      list.querySelector('.sub').style.display="block";
      header.querySelector('.gnb_bg').style.display="block";
      header.classList.add('change');
      header.style.transition="none";
    }
  });
  list.addEventListener('mouseleave',(e)=>{
    if(window.innerWidth>=1200){
      header.classList.remove('change');
      header.style.transition="none";
      list.querySelector('.sub').style.display="none";
      header.querySelector('.gnb_bg').style.display="none";
    }else if(window.innerWidth>=1200 && window.scrollY>0){
      header.style.transition="none";
      list.querySelector('.sub').style.display="none";
      header.querySelector('.gnb_bg').style.display="none";
    }
  });
});

// 메인 비주얼 배너
$(function(){
  let bgs=$('#main_visual .bg');

  let n=0;
  // console.log(bgs.length);
  $('#main_visual .btn_prev').click(function(){
    n--;
    if(n<=-1){
      n=2;
    }
    bgs.eq(n).fadeIn();
    bgs.not(bgs.eq(n)).fadeOut();
    bgs.eq(n).children('img').stop().css('scale','1.1').animate({
      scale:1
    },9000,'linear'); 
  });

  $('#main_visual .btn_next').click(function(){
    n++;
    if(n>=bgs.length){
      n=0;
    }
    bgs.not(bgs.eq(n)).fadeOut();
    bgs.eq(n).fadeIn();
    bgs.eq(n).children('img').stop().css('scale','1.1').animate({
      scale:1
    },9000,'linear');
  });
});

// 제목 & 콘텐츠 스크롤 등장
window.addEventListener('scroll',()=>{

const sectHeads=document.querySelectorAll('section>.headbox');
const characts=document.querySelectorAll('#introduce>ul>li'); 
const revboxs=document.querySelectorAll('#interview>.ivs_wrap>div');
const revtxts=document.querySelectorAll('.commentbox');
const supWrap=document.querySelector('#support>.wrap');
const supports=document.querySelectorAll('#support>.wrap>div');

 
//각 섹션 제목
  sectHeads.forEach((sectHead)=>{
    let shPosition=sectHead.getBoundingClientRect().top;

    if(shPosition<window.innerHeight*0.7){
      sectHead.classList.add('active');
    }else{
      sectHead.classList.remove('active');
    }
  });

  //학원 특징 띄우기
  characts.forEach((charact)=>{
    let charPosition=charact.getBoundingClientRect().top;
    
    if(charPosition<window.innerHeight*0.7 ){
      charact.classList.add('active');
      charact.classList.remove('inactive');
    }else{
      charact.classList.remove('active');
      charact.classList.add('inactive');
    }
  });

  //리뷰글 나타나기
  revboxs.forEach((revbox)=>{
    let boxPosition=revbox.getBoundingClientRect().top;
    if(boxPosition<window.innerHeight*0.5){
      revbox.classList.add('active');
    }else{
      revbox.classList.remove('.active');
    }
  });

  //취업 지원 등장
  let supPosition=supWrap.getBoundingClientRect().top;
  supports.forEach((support)=>{
    if(supPosition<window.innerHeight*0.7){
      support.classList.add('active');
      support.classList.remove('inactive');
    }else{
      support.classList.add('inactive');
      support.classList.remove('active');
    }
  });

}); 
