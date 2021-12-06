(function(){
 const openBurgerEl = document.querySelector('.menu__container');
 const closeBurgerEl = document.querySelector('.menu__close');

 const burgerMenuEl = document.querySelector('.welcome__menu__window');

 openBurgerEl.addEventListener("click",()=>{
  burgerMenuEl.style.display = "initial"
 });

 closeBurgerEl.addEventListener("click",()=>{
  burgerMenuEl.style.display = ""
 });


})()