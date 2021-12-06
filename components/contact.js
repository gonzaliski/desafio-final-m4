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
     <textarea class="contact__input-largo" id="message" rows="5"></textarea>
   </label>
   <div>
     <button class="contacto__button">Enviar</button>

   </div>
  </form>
  </section>
  `

  el.appendChild(componentEl)
}

function sendFormInfo() {
  const formEl = document.querySelector(".contacto__form");

  formEl.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const formData = evento.target;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },

      body: JSON.stringify({
        to: "gon.mendez13@gmail.com",
        message: `
        Nombre: ${formData.name.value} <br> <br>
        Email: ${formData.email.value} <br> <br>
        Mensaje: ${formData.message.value}
        `,
      }),
    });
    const name = formData.name.value
    formEl.reset();
    console.log(name)
    alert(name + ", tu mensaje ha sido enviado.");
  });
}


(function main(){
  const formEl = document.querySelector(".home__contact")
  createContact(formEl);
  sendFormInfo();
})()