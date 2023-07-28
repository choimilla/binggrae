function classOn (target) {
  target.addEventListener('click',()=>{
    target.classList.toggle("on");
  })
}
const productInquiry = document.querySelector("span.product_inquiry")
classOn(productInquiry);

const emailList = document.querySelector("span.email_list")
classOn(emailList);
