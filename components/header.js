function createContact(el){
  const componentEl = document.createElement("nav")

  componentEl.innerHTML = `
  <nav class="welcome__bar">
  <div class="logo__container">
  <a href="/#">
  <img src="/assets/logo.png" alt="logo" class="logo">
    </a>
  </div>
  <div class="menu__container">
    <img src="/assets/menu.png" alt="menu" class="welcome__menu-logo">
  </div>

  <div class="welcome__menu__window">
    <div class="menu__close">
      <img src="/assets/close.png" alt="menu" class="welcome__menu-logo">
    </div>
    <div class="menu__options-container">
      <div class="welcome__menu__window-options">
        <a href=".../portfolio/portfolio.html" class="menu__options__link">Portfolio</a>
        <a href=".../serivces/servicios.html" class="menu__options__link">Servicios</a>
        <a href="/contact/contacto.html"  class="menu__options__link">Contacto</a>
      </div>
    </div>
  </div>
    
  
  <ul class="welcome__nav__links">
    <li><a href=".../portfolio/portfolio.html" class="menu__options__link">Portfolio</a></li>
    <li><a href=".../serivces/servicios.html" class="menu__options__link">Servicios</a></li>
    <li><a href="/contact/contacto.html"  class="menu__options__link">Contacto</a></li>
  </ul>
  </nav>
  `

  el.appendChild(componentEl)
}


(function main(){
  const formEl = document.querySelector(".header")
  createContact(formEl)
})()