/* main.js */
/* header 스크롤 이벤트 */
const header = document.querySelector("#header")
const btnTop = document.querySelector(".btn_top");

window.addEventListener('scroll',()=>{
  let scroll = window.scrollY;
  console.log(scroll);

  if (scroll <= 0) {
    header.classList.remove('active');
    btnTop.classList.add("on");
  } else {
  header.classList.add('active');
  btnTop.classList.remove("on");
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

// cont1 행복한 빙그레의 맛 기차
const menuTrain = document.querySelector(".menu > ul:first-of-type");
const menuTrainEle = document.querySelectorAll(".menu > ul:first-of-type > li");
const menu_prevBtn = document.querySelector(".menu > .menu_arrow > a:first-child");
const menu_nextBtn = document.querySelector(".menu > .menu_arrow > a:last-child");
console.log(menuTrainEle)
let eleWidth = document.querySelector(".menu > ul > li").clientWidth;


// 메뉴 슬라이드
trainNum = 0;

function trainNext(train, element, nextBtn, prevBtn){ //기차,객체,넥버,프버
  trainNum++;
  if(trainNum >= element.length - 6){
    trainNum = element.length - 6;
    nextBtn.classList.remove("on");
  }
    train.style.transform = `translateX(${-trainNum * (eleWidth+17)}px)`;
    prevBtn.classList.add("on");
}
function trainPrev(train, nextBtn, prevBtn){
  trainNum--;
  if(trainNum <= 0){
    trainNum = 0;
    prevBtn.classList.remove("on");
  }
  train.style.transform = `translateX(${-trainNum * (eleWidth+17)}px)`;
  nextBtn.classList.add("on")
}

menu_nextBtn.addEventListener("click", e => {
  e.preventDefault();
  trainNext(menuTrain, menuTrainEle, menu_nextBtn, menu_prevBtn);
});

menu_prevBtn.addEventListener("click", e => {
  e.preventDefault();
  trainPrev(menuTrain, menu_nextBtn, menu_prevBtn);
});


// delay 리셋 : 스크롤이벤트때 발생하는 딜레이 초기화
for(i=0; i<menuTrainEle.length; i++){

  menuTrainEle[i].addEventListener("mouseover", e =>{
  
    if(e.currentTarget.parentElement.classList.contains("on"))
    menuTrainEle.forEach(item =>
      item.style.transitionDelay = 0+"s"
      )
    e.currentTarget.classList.add("on");
  })
}


// cont2 브랜드 기차
const brandTrain = document.querySelector(".brand > ul:first-of-type")
const brandTrainEle = document.querySelectorAll(".brand > ul:first-of-type > li")
const brand_prevBtn = document.querySelector(".brand > .menu_arrow > a:first-child")
const brand_nextBtn = document.querySelector(".brand > .menu_arrow > a:last-child")

brand_nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  trainNext(brandTrain, brandTrainEle, brand_nextBtn, brand_prevBtn);
});
brand_prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  trainPrev(brandTrain, brand_nextBtn, brand_prevBtn);
});

// 모바일 content1,2 
const menu_pagenation = document.querySelectorAll(".menu > ul:last-of-type > li");
const brand_pagnation = document.querySelectorAll(".brand > ul:last-of-type > li");
let bdWidth = body.offsetWidth;

function mobPagnation(circle, count, train){
  circle[0].addEventListener("click", e=>{
    e.preventDefault();
    circle.forEach(item => {
      item.classList.remove("active");
    })
    e.currentTarget.classList.add("active");
    train.style.transform = `translateX(${0}px)`;
  })
  circle[1].addEventListener("click", e=>{
    e.preventDefault();
    circle.forEach(item => {
      item.classList.remove("active");
    })
    e.currentTarget.classList.add("active");
    train.style.transform = `translateX(${-count * (eleWidth+17)}px)`;
  })
}

if(bdWidth < 769){
  mobPagnation(menu_pagnation, 2, menuTrain);
  mobPagnation(brand_pagnation, 1, brandTrain);
}

//  scroll event
function wheel (element){
  for(let i=0; i<menuTrainEle.length; i++){
    element[i].parentElement.classList.add("on");
  }
}
let cont3 = document.querySelector("div.cont3_inner");
let cont4 = document.querySelector("div.cont4_inner");

document.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  function scrollY(part1, part2, part3, part4){
    if(scroll >= part1 && scroll < part2){
      wheel(menuTrainEle);
    } else if(scroll >= part2 && scroll < part3){
      wheel(brandTrainEle);
    } else if(scroll >= part3 && scroll < part4){
      cont3.classList.add("on");
    } else if(scroll >= part4){
      cont4.classList.add("on");
    }
  }

  if(bdWidth <= 768){
    // 모바일
    scrollY(10, 550, 1300, 2280);

  } else if(bdWidth > 768 && bdWidth <= 1024){
    // 태블릿
    scrollY(10, 550, 1150, 1900);
  } else {
    // PC
    scrollY(100, 750, 1450, 2600);
  }

})
//탑버튼
let bodyH = body.offsetHeight;

btnTop.addEventListener("click", (e) => { 
  e.preventDefault();
  if(btnTop.classList.contains("on")){
    window.scroll({
      top: bodyH,
      left: 0,
      behavior: "smooth"
    });
  } else {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
});



  
//auto banner 

/* 
작동원리
1. btn_bnn_next 클릭하면 bnnW * bnnIndx 만큼 이동
2. 마지막 index에서 btn_bnn_next 클릭하면 맨 처음 배너로 이동
3. 처음 index에서 btn_bnn_prev 클릭하면 맨 마지막 배너로 이동

논리구조
1.단순히 작동원리대로 만들면 배너가 한방향으로 흐르는게 아닌 좌우로 왔다갔다하며 이동이 됨으로
배너 양옆에 눈속임용 클론노드를 만들어줘야함
[여름] (봄 여름) [봄] 
- []를 클론노드로 생성 => 메소드 cloneNode()
주의할점은 클론 노드는 빈 껍데기기 때문에 index배열에 포함되지않음 (왜냐? 실제 마크업을 하지않았으니까)
         0  1
[여름] (봄 여름) [봄] 
기차.appendchild([봄]) ~뒤에 
기차.inserBefore([여름],기차의 첫번째 노드) ~전에 = ~앞에

2. 앞의 과정에서 클론노드를 생성했으므로 양옆에 넣어줘야하는데 css로 frame의 width를 지정해버리면 안되기때문에 bnnW를 다시 셋팅해줘야함 css가서 frame의 width를 삭제하고 js로 bnnW를 다시구해야함
결과적으로 (실제 배너 갯수 + 클론노드갯수) * 100 "%"가 실제 너비가 되는것임

3.이제 움직일 값(translateX)을 구할건데,
수업때 bnnNum을 index번호로 많이 사용했기때문에 무조건 시작하는 지점의 값을 0으로 ,
lastNum(마지노선)는 length-1 로 단정지어 생각할 수 있는점을 주의하자

일부러 위의 함정에 빠져 식을 짜보면
bnnNum = 0
lastNum = li.length-1 (length는 2라고 가정) 
bnnW = 100(이라고 가정)
btn_bnn_next를 클릭해 bnnNum++ 되면, 움직여야하는 x값은 1 * bnnW 
즉, 1 * 100 이 됨으로 클론노드를 넣은 상황에서는 배너가 제자리 걸음을 하고 있는것이다!!!

시작할때
                  (-1)             0              1            (2)
                  [여름]       (   봄            여름    )      [봄] 
                  1W         보여지는 위치
btn_bnn_next 눌렀을때 
(-1)             0               1             (2)
[여름]       (   봄             여름    )       [봄] 
 2W                          보여지는 위치

다시 돌아와서 우리는 클론노드를 사용했다는걸 반드시 인지해야함..
클론노드를 사용했을때의 시작점은 [여름]에서 시작 되어야하기때문에 시작 기준점이 0이 아닌 index -bnnNum 로 셋팅 (실제 index번호는 없지만 우리가 부여해주는것임)
lastNum은 뒤에 [봄]이 있을걸 고려해서 -1이 아닌 length 길이 그 값 자체로 사용
때문에 +1을 더 해 결과적으로 +2씩 움직여야함 
bnnNum = 0
lastNum = li.length
시작하는 위치 = -bnnNum * bnnW

*/
// 재료
const bannerFrame = document.querySelector("div.banner_frame");
const bannerParent = document.querySelector("div.banner_frame > ul");
const banners = document.querySelectorAll("div.banner_frame > ul > li");
const nextBtn = document.querySelector("div.pagenation > .btn_next");
const prevBtn = document.querySelector("div.pagenation > .btn_prev");
const roll = document.querySelectorAll("div.pagenation .btn_rolling");
const play = document.querySelector("div.pagenation > .btn_play");
//1.클론만들기
const firstBnn = bannerParent.firstElementChild;
const lastBnn = bannerParent.lastElementChild;
let clone1 = firstBnn.cloneNode(true); //봄
let clone2 = lastBnn.cloneNode(true); //여름

//2.클론 위치 잡아주기
bannerParent.appendChild(clone1); //ul자식의 맨뒤로
bannerParent.insertBefore(clone2,bannerParent.firstElementChild);//ul의 첫번째 자식 앞에

//3.ul width값 설정 (cloneNode포함한 너비)
// ✅ 피드백 사진 1 참조
// 현재 우리가 움직여야 할 것은 bannerFrame. 따라서 너비를 지정해야 하는 것도 bannerFrame입니다.
/* 개발자 도구를 확인해보시면 알 수 있지만 ul의 너비가 7496px일 때, 
bannerFrame은 1874px이에요. 움직이는 원리는 길게 늘어진 기차가 조금씩 움직이면서 보이는 구조이기 때문에
움직이는 기차의 길이를 조정해야 해요!
*/

// bannerParent.style.width = `${100*(banners.length+2)}%`; //지은님 기존 코드
bannerFrame.style.width = `${100*(banners.length+2)}%`;

//4.움직일 translateX값 구하기
// let bnnW = firstBnn.offsetWidth; // li의 width 
let bnnW = document.body.clientWidth;
window.addEventListener('resize',()=>{  //window 사이즈가 변경될때마다 body의 가로값을 가져오
  bnnW = document.body.clientWidth;
  banners.forEach(item =>{ 
    item.style.width = bnnW;
  })
});

//5. 보여지는 범위 초기값 재설정 
let startNum = 0; //
let lastNum = banners.length; //클론2까지의 임의의 Indx번호 = 실제 배너의 랭스
// console.log(lastNum)
bannerFrame.style.transform = `translateX(${-bnnW}px)` //새로구한 배너W만큼 이동
console.log(startNum);
// console.log(lastNum);


//6. 클릭이벤트 
nextBtn.addEventListener("click",(e)=>{ //넥버 클릭시
  e.preventDefault; //점프 없애고
  startNum++;  // 배너 인덱스 1씩증가 
  bannerFrame.style.transform = `translateX(${-bnnW * (startNum+1)}px)` //스타트넘버에 +1 나는 기준을 -1 로 잡았으니까 2씩증가
  // if문으로 리미트를 걸어줘야하는데 
  bannerFrame.style.transition = "400ms"
  console.log(startNum)
  // ✅ 피드백 2.
  // 여기서 startNum이 lastNum과 같을 때~ 이면 = 이 아니라 ==을 사용해야 합니다.
  //  = 은 대입연산자!
  if(startNum == lastNum){
    startNum = 0; //이렇게 했을때 봄 배너로 다시 이동을 안해여 ㅜ
    setTimeout(function(){
      bannerFrame.style.transform = `translateX(${-bnnW}px)`
      bannerFrame.style.transition ="0s"
      console.log(startNum);
    },400)
  }
})
prevBtn.addEventListener("click",(e)=>{ //넥버 클릭시
  e.preventDefault; //점프 없애고
  startNum--;  // 배너 인덱스 1씩증가 
  bannerFrame.style.transform = `translateX(${-bnnW * (startNum+1)}px)` //스타트넘버에 +1 나는 기준을 -1 로 잡았으니까 2씩증가
  // if문으로 리미트를 걸어줘야하는데 
  bannerFrame.style.transition = "400ms"
  console.log(startNum)
  // ✅ 피드백 2.
  // 여기서 startNum이 lastNum과 같을 때~ 이면 = 이 아니라 ==을 사용해야 합니다.
  //  = 은 대입연산자!
  if(startNum == -1){
    startNum = lastNum-1; //이렇게 했을때 봄 배너로 다시 이동을 안해여 ㅜ
    setTimeout(function(){
      bannerFrame.style.transform = `translateX(${-bnnW*(lastNum)}px)`
      bannerFrame.style.transition ="0s"
      console.log(startNum);
    },400)
  }
})

//7.auto banner
function autoBanner(){
  startNum++;  // 배너 인덱스 1씩증가 
  bannerFrame.style.transform = `translateX(${-bnnW * (startNum+1)}px)` //스타트넘버에 +1 나는 기준을 -1 로 잡았으니까 2씩증가
  // if문으로 리미트를 걸어줘야하는데 
  bannerFrame.style.transition = "400ms"
  console.log(startNum)
  // ✅ 피드백 2.
  // 여기서 startNum이 lastNum과 같을 때~ 이면 = 이 아니라 ==을 사용해야 합니다.
  //  = 은 대입연산자!
  if(startNum == lastNum){
    startNum = 0; //이렇게 했을때 봄 배너로 다시 이동을 안해여 ㅜ
    setTimeout(function(){
      bannerFrame.style.transform = `translateX(${-bnnW}px)`
      bannerFrame.style.transition ="0s"
      console.log(startNum);
    },400)
  }
  setTimeout(autoBanner,5000);
}
let auto = setTimeout(autoBanner,5000);
//play 버튼
let flag=true;

play.addEventListener("click",e=>{

  if(flag){
    //멈춤 
    play.classList.add("on");
    clearTimeout(auto); 
    flag = false;
    console.log(flag)
  } else { 
    //재생
    play.classList.remove("on");
    auto = setTimeout(autoBanner,5000);
    flag=true;
  }
  
})



