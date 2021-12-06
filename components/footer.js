function createContact(el){
  const componentEl = document.createElement("div")

  componentEl.innerHTML = `
  <div class="footer__container">
  <img src="../assets/logo.png" alt="logo" class="logo">
 <div class="footer__links-container">
   <div class="footer__social">
     <a href="https://www.instagram.com/gonmendez_/" class="social__link">Instagram</a>
     <img src="../assets/instagram.png" alt="" class="social__logo">
   </div>
   <div class="footer__social">
     <a href="https://twitter.com/gonmendez_" class="social__link">Twitter</a>
     <img src="../assets/twitter.png" alt="" class="social__logo">
   </div>
   <div class="footer__social">
     <a href="https://github.com/gonzaliski" class="social__link">Github</a>
     <img src="../assets/github.png" alt="" class="social__logo">
   </div>
 </div>
  `

  el.appendChild(componentEl)
}


(function main(){
  const formEl = document.querySelector(".footer")
  createContact(formEl)
})()