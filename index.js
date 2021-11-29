function addServiceCard(params = {}){
const cardTemplate = document.querySelector("#services__card-template")
const cardElement = document.querySelector(".services__card")
cardTemplate.content.querySelector(".services__card-title").textContent = params.title;
cardTemplate.content.querySelector(".services__card-text").textContent = params.description;


const clone =  document.importNode(cardTemplate.content,true);
cardElement.appendChild(clone);

}

function main(){
  addServiceCard({
    title:"Un servicio",
    description:"hice este proyecto y me parecio copado Lorem ipsum dolor sit amet consectetur adipiscing elit ante congue"
  });
  addServiceCard({
    title:"Un servicio",
    description:"hice este proyecto y me parecio copado Lorem ipsum dolor sit amet consectetur adipiscing elit ante congue"
  });
  addServiceCard({
    title:"Un servicio",
    description:"hice este proyecto y me parecio copado Lorem ipsum dolor sit amet consectetur adipiscing elit ante congue"
  });
  
}
main();