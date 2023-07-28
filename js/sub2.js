window.addEventListener('load',()=>{


/* header 스크롤 이벤트 */
const header = document.querySelector("#header")
// const btnTop = document.querySelector(".btn_top");

window.addEventListener('scroll',()=>{
  let scroll = window.scrollY;
  console.log(scroll);

  if (scroll <= 0) {
    header.classList.remove('active');
    // btnTop.classList.add("on");
  } else {
  header.classList.add('active');
  // btnTop.classList.remove("on");
  }
})

//gnb 마우스 호버
const headerWrap = document.querySelector(".header_wrap");
const gnbMenu = document.querySelectorAll(".gnb > ul > li"); // li 6개 주메뉴
const subMenu = document.querySelectorAll(".gnb > ul > li > ul"); // 하위ul 
const line = document.querySelector("div.header_bottom")

for(var i=0; i < gnbMenu.length; i++){
  gnbMenu[i].addEventListener("mouseover",()=>{
    headerWrap.classList.add("on");
    line.classList.add("on");
    subMenu.forEach(item=>{
      item.classList.add("on");
      item.parentElement.style.overflow = "visible"
    });
  });
  gnbMenu[i].addEventListener("mouseout",()=>{
    headerWrap.classList.remove("on");
    line.classList.remove("on");
    subMenu.forEach(item=>{
      item.classList.remove("on");
      item.parentElement.style.overflow = "hidden"
    })
  })
}
//언어설정 메뉴
const lang = document.querySelector(".language");
const langMenu = document.querySelector(".language > ul")

lang.addEventListener("click",(e)=>{
  e.preventDefault();
  langMenu.classList.toggle("on");
})

// 햄버거 메뉴 클릭 이벤트 
const btnHam = document.querySelector(".hamburger");
const body = document.querySelector("body");
const kr = document.querySelector(".language");

btnHam.addEventListener("click",(e)=>{
  e.preventDefault;
  body.classList.toggle("on");
  btnHam.classList.toggle("on");
  kr.classList.toggle("on");
})

//모바일 햄버거 메뉴
const moGnbMenu = document.querySelectorAll("ul.ham_gnb li");

moGnbMenu.forEach(item=>{
  item.addEventListener("click",(e)=>{
    e.preventDefault;
    e.currentTarget.classList.toggle("on");
  })
})


function classOn (target) {
  target.addEventListener('click',()=>{
    target.classList.toggle("on");
  })
}
const productInquiry = document.querySelector("span.product_inquiry")
classOn(productInquiry);

const emailList = document.querySelector("span.email_list")
classOn(emailList);

})