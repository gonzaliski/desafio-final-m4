function addServiceCard(params = {}){
const cardTemplate = document.querySelector("#services__card-template")
const cardElement = document.querySelector(".services__card")
cardTemplate.content.querySelector(".services__card-title").textContent = params.title;
cardTemplate.content.querySelector(".services__card-text").textContent = params.description;


const clone =  document.importNode(cardTemplate.content,true);
cardElement.appendChild(clone);

}

function addWelcome(params = {}){
  const welcomeTemplate = document.querySelector("#welcome__text-template")
  const divElement = document.querySelector(".welcome__text")
  welcomeTemplate.content.querySelector(".welcome__title").textContent = params.welcomeTitle;
  welcomeTemplate.content.querySelector(".welcome__subtitle").textContent = params.welcomeSubtitle;
  
  
  const clone =  document.importNode(welcomeTemplate.content,true);
  divElement.appendChild(clone);
}

function addPresentation(params = {}){
 
  const welcomeTemplate = document.querySelector("#about__template")
  const divElement = document.querySelector(".about")
  welcomeTemplate.content.querySelector(".about__title").textContent = params.aboutTitle;
  welcomeTemplate.content.querySelector(".about__text").textContent = params.aboutText;
  welcomeTemplate.content.querySelector(".about__image").setAttribute("src",params.aboutImage);
  
  
  const clone =  document.importNode(welcomeTemplate.content,true);
  divElement.appendChild(clone);
}

function getServices(){
  return fetch("https://preview.contentful.com/spaces/x1j2peljha18/environments/master/entries?access_token=8HkLEdrPGMe3gdgJ-RZb60sFyXKtvOWaYCG23w8pNkU&&content_type=service")
  .then((res)=>{
    return res.json();
  }).then((data)=>{
    const fieldCollection = data.items.map((item)=>{
      
      return{
        title:item.fields.title,
        description:item.fields.description
      }
    });
    console.log(fieldCollection)
    return fieldCollection
  });
}

function getWelcome(){
  return fetch("https://preview.contentful.com/spaces/x1j2peljha18/environments/master/entries?access_token=8HkLEdrPGMe3gdgJ-RZb60sFyXKtvOWaYCG23w8pNkU&&content_type=data")
  .then((res)=>{
    return res.json();
  }).then((e)=>{
    const dataCollection = e.items.map((item)=>{
      
      return{
        welcomeTitle: item.fields.welcomeTitle,
        welcomeSubtitle: item.fields.welcomeSubtitle
      }
    });
    return dataCollection
  });

}
function getPresentation(){
  return fetch("https://preview.contentful.com/spaces/x1j2peljha18/environments/master/entries?access_token=8HkLEdrPGMe3gdgJ-RZb60sFyXKtvOWaYCG23w8pNkU&&content_type=presentation")
  .then((res)=>{
    return res.json();
  }).then((e)=>{
    const media =  e.includes.Asset[0].fields.file.url
    const dataCollection = e.items.map((item)=>{
      return{
        aboutTitle: item.fields.aboutTitle,
        aboutText: item.fields.aboutText,
        aboutImage: media
      }
    });
    console.log(dataCollection)
    return dataCollection
  });

}


(function(){
  getServices().then( (services)=>{
    for (const s of services){
      addServiceCard(s)
    }
  });

  getWelcome().then( (data)=>{
    addWelcome(data[0])
  })
  getPresentation().then( (presentation)=>{
    addPresentation(presentation[0])
  })

  })()