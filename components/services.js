function addServices(params = {}){
  const cardTemplate = document.querySelector("#services__card-template")
  const cardElement = document.querySelector(".services__card")
  cardTemplate.content.querySelector(".portfservices__card-img").setAttribute("src",params.image);
  cardTemplate.content.querySelector(".services__card-title").textContent = params.title;
  cardTemplate.content.querySelector(".services__card-text").textContent = params.description;
  
  const clone =  document.importNode(cardTemplate.content,true);
  cardElement.appendChild(clone);
  
  }


function getServices(){
  return fetch("https://preview.contentful.com/spaces/x1j2peljha18/environments/master/entries?access_token=8HkLEdrPGMe3gdgJ-RZb60sFyXKtvOWaYCG23w8pNkU&&content_type=serviciosWorks")
  .then((res)=>{
    return res.json();
  }).then((data)=>{
    const media =  data.includes.Asset[0].fields.file.url
    const fieldCollection = data.items.map((item)=>{
      
      return{
        image:media,
        title:item.fields.serviceTitle,
        description:item.fields.serviceDescription
      }
    });
    return fieldCollection
  });
}

(function main(){
  getServices().then( (service)=>{
    for (const s of service){
      addServices(s)
    }
  });

})()