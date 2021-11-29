function createContact(el){
  const componentEl = document.createElement("div")

  componentEl.innerHTML = `
  <section class="contacto">
  <h2 class="contacto__title">Contacto</h2>
  <form class="contacto__form">
    <label class="contacto__label">
    <h4>Nombre</h4>
     <input class="contact__input" type="text" id="name">
   </label>
   <label class="contacto__label">
     <h4>Email</h4>
     <input class="contact__input" type="text" id="email">
   </label>
   <label class="contacto__label">
     <h4>Mensaje</h4>
     <textarea class="contact__input-largo" rows="5"></textarea>
   </label>
   <div>
     <button class="contacto__button">Enviar</button>

   </div>
  </form>
  </section>
  `
  componentEl.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("El form se envió")
  })

  el.appendChild(componentEl)
}


(function main(){
  const formEl = document.querySelector(".home__contact")
  createContact(formEl)
})()